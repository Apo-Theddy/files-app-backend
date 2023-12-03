import { Dir } from "src/dirs/entities/dir.entity";
export declare class File {
    FileID: number;
    OriginalName: string;
    UniqueName: string;
    TypeExtension: string;
    Path: string;
    Width?: number;
    Height?: number;
    Size: number;
    CreationDate?: string;
    DeleteDate?: string;
    Dir?: Dir;
}
