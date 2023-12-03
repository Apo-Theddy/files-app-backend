import { IsNotEmpty, IsNumber, IsPositive, IsString } from "class-validator";

export class UpdateDirDto {
    @IsNumber()
    @IsPositive()
    @IsNotEmpty()
    DirID: number;

    @IsString()
    @IsNotEmpty()
    DirName: string;
}