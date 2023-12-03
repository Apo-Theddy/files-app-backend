import { ConflictException, Injectable, NotFoundException } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Dir } from "../entities/dir.entity";
import { IsNull, Like, Repository } from "typeorm";
import { UpdateDirDto } from "../dto/update-dir.dto";

@Injectable()
export class DirService {
    constructor(
        @InjectRepository(Dir)
        private dirRepository: Repository<Dir>
    ) { }

    async GetDirs(page: number = 1): Promise<Dir[]> {
        const dirs = await this.dirRepository.find({ where: { DeleteDate: IsNull() }, skip: --page * 10, take: 10 })
        return dirs;
    }

    async GetDirSimple(Dir: number | string): Promise<Dir> {
        let conditions = {
            "string": { where: { DeleteDate: IsNull(), DirName: Like(`%${Dir}%`) } },
            'number': { where: { DeleteDate: IsNull(), DirID: Dir } }
        };
        const dir = await this.dirRepository.findOne(conditions[typeof Dir])
        return dir;
    }

    async GetDir(DirID: number): Promise<Dir> {
        let dir = await this.GetDirSimple(DirID);
        if (!dir) throw new NotFoundException("No se encontro la carpeta buscada");
        return dir;
    }

    async GetDirByName(DirName: string): Promise<Dir> {
        let dir = await this.GetDirSimple(DirName);
        if (!dir) throw new NotFoundException("No se encontro la carpeta buscada");
        return dir
    }

    async AddDir(DirName: string): Promise<Dir> {
        let dir = await this.GetDirSimple(DirName)
        if (dir) throw new ConflictException("Esta carpeta ya existe");
        const newDir = this.dirRepository.create({ DirName })
        return await this.dirRepository.save(newDir);
    }

    async DeleteDir(DirID: number): Promise<void> {
        const dir = await this.GetDir(DirID);
        dir.DeleteDate = new Date().toString();
        await this.dirRepository.save(dir);
    }

    async UpdateDir(updateDirDto: UpdateDirDto): Promise<Dir> {
        const dir = await this.GetDir(updateDirDto.DirID);
        Object.assign(dir, updateDirDto);
        return await this.dirRepository.save(dir);
    }
}
