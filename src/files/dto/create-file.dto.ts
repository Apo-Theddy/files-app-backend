import { Dir } from "src/dirs/entities/dir.entity";

export class CreateFileDto {
    File: Express.Multer.File;
    Dir?: number
}