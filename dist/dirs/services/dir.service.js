"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.DirService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const dir_entity_1 = require("../entities/dir.entity");
const typeorm_2 = require("typeorm");
let DirService = class DirService {
    constructor(dirRepository) {
        this.dirRepository = dirRepository;
    }
    async GetDirs(page = 1) {
        const dirs = await this.dirRepository.find({ where: { DeleteDate: (0, typeorm_2.IsNull)() }, skip: --page * 10, take: 10 });
        return dirs;
    }
    async GetDirSimple(Dir) {
        let conditions = {
            "string": { where: { DeleteDate: (0, typeorm_2.IsNull)(), DirName: (0, typeorm_2.Like)(`%${Dir}%`) } },
            'number': { where: { DeleteDate: (0, typeorm_2.IsNull)(), DirID: Dir } }
        };
        const dir = await this.dirRepository.findOne(conditions[typeof Dir]);
        return dir;
    }
    async GetDir(DirID) {
        let dir = await this.GetDirSimple(DirID);
        if (!dir)
            throw new common_1.NotFoundException("No se encontro la carpeta buscada");
        return dir;
    }
    async GetDirByName(DirName) {
        let dir = await this.GetDirSimple(DirName);
        if (!dir)
            throw new common_1.NotFoundException("No se encontro la carpeta buscada");
        return dir;
    }
    async AddDir(DirName) {
        let dir = await this.GetDirSimple(DirName);
        if (dir)
            throw new common_1.ConflictException("Esta carpeta ya existe");
        const newDir = this.dirRepository.create({ DirName });
        return await this.dirRepository.save(newDir);
    }
    async DeleteDir(DirID) {
        const dir = await this.GetDir(DirID);
        dir.DeleteDate = new Date().toString();
        await this.dirRepository.save(dir);
    }
    async UpdateDir(updateDirDto) {
        const dir = await this.GetDir(updateDirDto.DirID);
        Object.assign(dir, updateDirDto);
        return await this.dirRepository.save(dir);
    }
};
exports.DirService = DirService;
exports.DirService = DirService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(dir_entity_1.Dir)),
    __metadata("design:paramtypes", [typeorm_2.Repository])
], DirService);
//# sourceMappingURL=dir.service.js.map