import { Dir } from "../entities/dir.entity";
import { Repository } from "typeorm";
import { UpdateDirDto } from "../dto/update-dir.dto";
export declare class DirService {
    private dirRepository;
    constructor(dirRepository: Repository<Dir>);
    GetDirs(page?: number): Promise<Dir[]>;
    GetDirSimple(Dir: number | string): Promise<Dir>;
    GetDir(DirID: number): Promise<Dir>;
    GetDirByName(DirName: string): Promise<Dir>;
    AddDir(DirName: string): Promise<Dir>;
    DeleteDir(DirID: number): Promise<void>;
    UpdateDir(updateDirDto: UpdateDirDto): Promise<Dir>;
}
