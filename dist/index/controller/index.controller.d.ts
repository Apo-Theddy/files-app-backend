import { IndexService } from "../src/index.service";
export declare class IndexController {
    private readonly indexService;
    constructor(indexService: IndexService);
    GetMainIndex(): Promise<{
        RecentFiles: import("../../files/entities/file.entity").File[];
        Files: import("../../files/entities/file.entity").File[];
        Dirs: import("../../dirs/entities/dir.entity").Dir[];
    }>;
    GetIndex(dirPage: number, filePage: number): Promise<{
        RecentFiles: import("../../files/entities/file.entity").File[];
        Files: import("../../files/entities/file.entity").File[];
        Dirs: import("../../dirs/entities/dir.entity").Dir[];
    }>;
}
