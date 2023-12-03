import { File } from "../entities/file.entity";
import { Repository } from "typeorm";
import { CreateFileDto } from "../dto/create-file.dto";
import { DirService } from "src/dirs/services/dir.service";
export declare class FileService {
    private fileRepository;
    private dirService;
    constructor(fileRepository: Repository<File>, dirService: DirService);
    GetFiles(page?: number): Promise<File[]>;
    GetFilesByDir(DirID: number, page: number): Promise<File[]>;
    GetRecentFiles(): Promise<File[]>;
    GetClasificationFiles(): Promise<any>;
    formatDate(date: string | number): string;
    GetFile(FileID: number): Promise<File>;
    AddFile({ File, Dir }: CreateFileDto): Promise<File>;
    DeleteFile(FileID: number): Promise<void>;
}
