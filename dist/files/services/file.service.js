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
exports.FileService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const file_entity_1 = require("../entities/file.entity");
const typeorm_2 = require("typeorm");
const dir_service_1 = require("../../dirs/services/dir.service");
const path_1 = require("path");
const image_size_1 = require("image-size");
const multer_config_1 = require("../../config/multer.config");
const fs_1 = require("fs");
let FileService = class FileService {
    constructor(fileRepository, dirService) {
        this.fileRepository = fileRepository;
        this.dirService = dirService;
    }
    async GetFiles(page = 1) {
        const files = await this.fileRepository.find({
            order: {
                FileID: "DESC"
            }, where: { DeleteDate: (0, typeorm_2.IsNull)() }, skip: --page * 10, take: 10
        });
        return files;
    }
    async GetFilesByDir(DirID, page) {
        const files = await this.fileRepository.find({ where: { DeleteDate: (0, typeorm_2.IsNull)(), Dir: { DirID, } }, skip: --page * 10, take: 10 });
        return files;
    }
    async GetRecentFiles() {
        const date = Date.now();
        const currentDate = this.formatDate(date);
        const files = await this.GetFiles();
        const recentFiles = files.filter((file) => this.formatDate(file.CreationDate) === currentDate);
        return recentFiles;
    }
    async GetClasificationFiles() {
        const query = `SELECT COUNT(TypeExtension) as 'Count', TypeExtension FROM [File] GROUP BY(TypeExtension)`;
        return this.fileRepository.query(query);
    }
    formatDate(date) {
        return new Date(date).toLocaleDateString().replaceAll("/", "-");
    }
    async GetFile(FileID) {
        const file = await this.fileRepository.findOne({ where: { FileID, DeleteDate: (0, typeorm_2.IsNull)() } });
        if (!file)
            throw new common_1.NotFoundException("No se encontro el archivo buscado");
        return file;
    }
    async AddFile({ File, Dir }) {
        const rgx = /^image\/(gif|jpeg|jpg|png|webp)$/i;
        const uniqueName = (0, multer_config_1.GenerateFilename)(File);
        (0, fs_1.writeFileSync)(`./uploads/${uniqueName}`, File.buffer);
        let dimensions = null;
        if (rgx.test(File.mimetype))
            dimensions = (0, image_size_1.default)(File.buffer);
        const newFile = this.fileRepository.create({
            OriginalName: File.originalname,
            Path: `uploads/${uniqueName}`,
            UniqueName: uniqueName,
            CreationDate: new Date().toISOString(),
            TypeExtension: (0, path_1.extname)(File.originalname.toLowerCase()),
            Height: dimensions !== null ? dimensions.height : null,
            Width: dimensions !== null ? dimensions.width : null,
            Size: File.size / 1048576
        });
        if (Dir)
            newFile.Dir = await this.dirService.GetDir(parseInt(Dir.toString()));
        return await this.fileRepository.save(newFile);
    }
    async DeleteFile(FileID) {
        const file = await this.GetFile(FileID);
        let currentDate = new Date();
        file.DeleteDate = currentDate.getTime().toString();
        await this.fileRepository.save(file);
    }
};
exports.FileService = FileService;
exports.FileService = FileService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(file_entity_1.File)),
    __metadata("design:paramtypes", [typeorm_2.Repository,
        dir_service_1.DirService])
], FileService);
//# sourceMappingURL=file.service.js.map