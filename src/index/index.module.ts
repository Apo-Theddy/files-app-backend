import { Module } from "@nestjs/common";
import { DirModule } from "src/dirs/dir.module";
import { FileModule } from "src/files/file.module";
import { IndexController } from "./controller/index.controller";
import { IndexService } from "./src/index.service";

@Module({
    imports: [DirModule, FileModule],
    controllers: [IndexController],
    providers: [IndexService],
})
export class IndexModule { }