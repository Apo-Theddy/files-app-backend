import { Module } from "@nestjs/common";
import { DirService } from "./services/dir.service";
import { TypeOrmModule } from "@nestjs/typeorm";
import { File } from "src/files/entities/file.entity";
import { Dir } from "./entities/dir.entity";
import { DirController } from "./controllers/dir.controller";

@Module({
    imports: [TypeOrmModule.forFeature([Dir, File])],
    controllers: [DirController],
    providers: [DirService],
    exports: [DirService]
})
export class DirModule { }