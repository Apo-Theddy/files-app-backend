import { Injectable, NotFoundException } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { File } from "../entities/file.entity";
import { IsNull, Repository } from "typeorm";
import { CreateFileDto } from "../dto/create-file.dto";
import { DirService } from "src/dirs/services/dir.service";
import { extname } from "path";
import sizeOf from "image-size"
import { GenerateFilename } from "src/config/multer.config";
import { writeFileSync } from "fs";
import { ISizeCalculationResult } from "image-size/dist/types/interface";

@Injectable()
export class FileService {
    constructor(
        @InjectRepository(File)
        private fileRepository: Repository<File>,
        private dirService: DirService
    ) { }

    async GetFiles(page: number = 1): Promise<File[]> {
        const files = await this.fileRepository.find({
            order: {
                FileID: "DESC"
            }, where: { DeleteDate: IsNull() }, skip: --page * 10, take: 10
        });
        return files;
    }

    async GetFilesByDir(DirID: number, page: number): Promise<File[]> {
        const files = await this.fileRepository.find({ where: { DeleteDate: IsNull(), Dir: { DirID, } }, skip: --page * 10, take: 10 });
        return files;
    }


    async GetRecentFiles(): Promise<File[]> {
        const date = Date.now();
        const currentDate = this.formatDate(date);
        const files = await this.GetFiles();
        const recentFiles = files.filter((file) => this.formatDate(file.CreationDate) === currentDate);
        return recentFiles;
    }

    async GetClasificationFiles() {
        const query = `SELECT COUNT(TypeExtension) as 'Count', TypeExtension FROM [File] GROUP BY(TypeExtension)`
        return this.fileRepository.query(query);
    }


    formatDate(date: string | number): string {
        return new Date(date).toLocaleDateString().replaceAll("/", "-");
    }

    async GetFile(FileID: number): Promise<File> {
        const file = await this.fileRepository.findOne({ where: { FileID, DeleteDate: IsNull() } });
        if (!file) throw new NotFoundException("No se encontro el archivo buscado")
        return file;
    }

    async AddFile({ File, Dir }: CreateFileDto): Promise<File> {
        const rgx = /^image\/(gif|jpeg|jpg|png|webp)$/i;
        const uniqueName = GenerateFilename(File);
        writeFileSync(`./uploads/${uniqueName}`, File.buffer);
        let dimensions: ISizeCalculationResult | null = null;
        if (rgx.test(File.mimetype)) dimensions = sizeOf(File.buffer)
        const newFile = this.fileRepository.create({
            OriginalName: File.originalname,
            Path: `uploads/${uniqueName}`,
            UniqueName: uniqueName,
            CreationDate: new Date().toISOString(),
            TypeExtension: extname(File.originalname.toLowerCase()),
            Height: dimensions !== null ? dimensions.height : null,
            Width: dimensions !== null ? dimensions.width : null,
            Size: File.size / 1048576
        })
        if (Dir) newFile.Dir = await this.dirService.GetDir(parseInt(Dir.toString()))
        return await this.fileRepository.save(newFile);
    }

    async DeleteFile(FileID: number): Promise<void> {
        const file = await this.GetFile(FileID);
        let currentDate = new Date();
        file.DeleteDate = currentDate.getTime().toString();
        await this.fileRepository.save(file);
    }
}