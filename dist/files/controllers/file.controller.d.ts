/// <reference types="multer" />
import { FileService } from "../services/file.service";
import { File } from "../entities/file.entity";
export declare class FileControllers {
    private readonly fileService;
    constructor(fileService: FileService);
    GetAllFiles(): Promise<File[]>;
    GetFiles(page: number): Promise<File[]>;
    GetFilesByDir(DirID: number, page: number): Promise<File[]>;
    GetRecentFiles(): Promise<File[]>;
    GetFile(FileID: number): Promise<File>;
    UploadFile(file: Express.Multer.File, body: any): Promise<File>;
    DeleteFile(FileID: number): void;
}
