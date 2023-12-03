import { Module } from "@nestjs/common";
import { FileService } from "./services/file.service";
import { FileControllers } from "./controllers/file.controller";
import { TypeOrmModule } from "@nestjs/typeorm";
import { File } from "./entities/file.entity";
import { Dir } from "src/dirs/entities/dir.entity";
import { DirModule } from "src/dirs/dir.module";

@Module({
    imports: [TypeOrmModule.forFeature([File, Dir]), DirModule],
    controllers: [FileControllers],
    providers: [FileService],
    exports: [FileService]
})
export class FileModule {
}