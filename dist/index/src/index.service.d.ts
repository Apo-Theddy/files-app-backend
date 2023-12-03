import { DirService } from "src/dirs/services/dir.service";
import { FileService } from "src/files/services/file.service";
export declare class IndexService {
    private readonly fileService;
    private readonly dirService;
    constructor(fileService: FileService, dirService: DirService);
    getStorage(): Promise<{
        TotalSpace: number;
        FreeSpace: number;
        UsedSpace: number;
    }>;
    convertToGB(size: number): number;
    GetIndex(dirPage?: number, filePage?: number): Promise<{
        RecentFiles: import("../../files/entities/file.entity").File[];
        Files: import("../../files/entities/file.entity").File[];
        Dirs: import("../../dirs/entities/dir.entity").Dir[];
    }>;
}
