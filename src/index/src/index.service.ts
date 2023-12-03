import { DirService } from "src/dirs/services/dir.service";
import { FileService } from "src/files/services/file.service";
import checkDisk from "check-disk-space";
import { Injectable } from "@nestjs/common";
import { join } from "path";
import { readdirSync } from "fs";

@Injectable()
export class IndexService {

    constructor(
        private readonly fileService: FileService,
        private readonly dirService: DirService
    ) { }

    async getStorage() {
        const diskSpace = await checkDisk("c:\\");
        const TotalSpace = this.convertToGB(diskSpace.size);
        const FreeSpace = this.convertToGB(diskSpace.free);
        const UsedSpace = TotalSpace - FreeSpace;
        return { TotalSpace, FreeSpace, UsedSpace };
    }

    convertToGB(size: number): number {
        return size / Math.pow(10, 9)
    };


    async GetIndex(dirPage: number = 1, filePage: number = 1) {
        const [/*Storage,*/ RecentFiles, Files, Dirs] = await Promise.all([
            // this.getStorage(),
            this.fileService.GetRecentFiles(),
            this.fileService.GetFiles(filePage),
            this.dirService.GetDirs(dirPage),
        ]);
        return { RecentFiles, Files, Dirs,/*Storage*/ };
    }

}