import { Body, Controller, Delete, Get, Param, ParseIntPipe, Post, Put, Query } from "@nestjs/common";
import { DirService } from "../services/dir.service";
import { Dir } from "../entities/dir.entity";
import { UpdateDirDto } from "../dto/update-dir.dto";

@Controller("dirs")
export class DirController {
    constructor(
        private readonly dirService: DirService
    ) { }

    @Get()
    GetAllDirs(): Promise<Dir[]> {
        return this.dirService.GetDirs();
    }

    @Get("/pages")
    GetDirs(@Query("page", ParseIntPipe) page: number): Promise<Dir[]> {
        return this.dirService.GetDirs();
    }

    @Get("/:DirID")
    GetDir(@Param("DirID", ParseIntPipe) DirID: number): Promise<Dir> {
        return this.dirService.GetDir(DirID);
    }

    @Get("search/:DirName")
    GetDirByName(@Param("DirName") DirName: string): Promise<Dir> {
        return this.dirService.GetDirByName(DirName);
    }

    @Post()
    AddDir(@Body() body: { DirName: string }): Promise<Dir> {
        return this.dirService.AddDir(body.DirName);
    }

    @Put()
    UpdateDir(@Body() updateDirDto: UpdateDirDto): Promise<Dir> {
        return this.dirService.UpdateDir(updateDirDto);
    }

    @Delete("/:DirID")
    DeleteDir(@Param("DirID", ParseIntPipe) DirID: number) {
        this.dirService.DeleteDir(DirID);
    }
}