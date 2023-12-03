import { DirService } from "../services/dir.service";
import { Dir } from "../entities/dir.entity";
import { UpdateDirDto } from "../dto/update-dir.dto";
export declare class DirController {
    private readonly dirService;
    constructor(dirService: DirService);
    GetAllDirs(): Promise<Dir[]>;
    GetDirs(page: number): Promise<Dir[]>;
    GetDir(DirID: number): Promise<Dir>;
    GetDirByName(DirName: string): Promise<Dir>;
    AddDir(body: {
        DirName: string;
    }): Promise<Dir>;
    UpdateDir(updateDirDto: UpdateDirDto): Promise<Dir>;
    DeleteDir(DirID: number): void;
}
