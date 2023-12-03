import { HttpCode, HttpException, HttpStatus } from "@nestjs/common";
import { MulterOptions } from "@nestjs/platform-express/multer/interfaces/multer-options.interface";
import { v4 } from "uuid";
import { memoryStorage } from "multer";
import { extname } from "path";


export const multerConfig: MulterOptions = {
    dest: "./uploads",
    storage: memoryStorage()
}

export const GenerateFilename = (file: any) => {
    const ext = extname(file.originalname)
    const uuid = v4();
    return `${uuid}${ext}`
}