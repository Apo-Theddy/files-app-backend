import { Body, Controller, Delete, FileTypeValidator, Get, Param, ParseFilePipe, ParseIntPipe, Post, Query, UploadedFile, UseInterceptors } from "@nestjs/common";
import { FileService } from "../services/file.service";
import { File } from "../entities/file.entity";
import { FileInterceptor } from "@nestjs/platform-express";
import { multerConfig } from "src/config/multer.config";
import { CreateFileDto } from "../dto/create-file.dto";

@Controller("files")
export class FileControllers {
    constructor(
        private readonly fileService: FileService
    ) { }

    @Get()
    GetAllFiles(): Promise<File[]> {
        return this.fileService.GetFiles()
    }

    @Get("pages")
    GetFiles(@Query("page", ParseIntPipe) page: number): Promise<File[]> {
        return this.fileService.GetFiles(page)
    }


    @Get("dirs/:DirID")
    GetFilesByDir(@Param("DirID", ParseIntPipe) DirID: number, @Query("page", ParseIntPipe) page: number): Promise<File[]> {
        return this.fileService.GetFilesByDir(DirID, page)
    }

    @Get("/recents/")
    GetRecentFiles(): Promise<File[]> {
        return this.fileService.GetRecentFiles();
    }

    @Get("/:FileID")
    GetFile(@Param("FileID", ParseIntPipe) FileID: number): Promise<File> {
        return this.fileService.GetFile(FileID);
    }

    @Post("/upload")
    @UseInterceptors(FileInterceptor("file", multerConfig))
    UploadFile(@UploadedFile() file: Express.Multer.File, @Body() body: any): Promise<File> {
        let createFileDto = new CreateFileDto();
        createFileDto.File = file;
        if (body.dir) createFileDto.Dir = body.dir;
        return this.fileService.AddFile(createFileDto);
    }

    @Delete("/:FileID")
    DeleteFile(@Param("FileID", ParseIntPipe) FileID: number): void {
        this.fileService.DeleteFile(FileID);
    }

}
