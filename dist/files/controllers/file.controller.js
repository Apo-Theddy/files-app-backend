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
exports.FileControllers = void 0;
const common_1 = require("@nestjs/common");
const file_service_1 = require("../services/file.service");
const platform_express_1 = require("@nestjs/platform-express");
const multer_config_1 = require("../../config/multer.config");
const create_file_dto_1 = require("../dto/create-file.dto");
let FileControllers = class FileControllers {
    constructor(fileService) {
        this.fileService = fileService;
    }
    GetAllFiles() {
        return this.fileService.GetFiles();
    }
    GetFiles(page) {
        return this.fileService.GetFiles(page);
    }
    GetFilesByDir(DirID, page) {
        return this.fileService.GetFilesByDir(DirID, page);
    }
    GetRecentFiles() {
        return this.fileService.GetRecentFiles();
    }
    GetFile(FileID) {
        return this.fileService.GetFile(FileID);
    }
    UploadFile(file, body) {
        let createFileDto = new create_file_dto_1.CreateFileDto();
        createFileDto.File = file;
        if (body.dir)
            createFileDto.Dir = body.dir;
        return this.fileService.AddFile(createFileDto);
    }
    DeleteFile(FileID) {
        this.fileService.DeleteFile(FileID);
    }
};
exports.FileControllers = FileControllers;
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], FileControllers.prototype, "GetAllFiles", null);
__decorate([
    (0, common_1.Get)("pages"),
    __param(0, (0, common_1.Query)("page", common_1.ParseIntPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], FileControllers.prototype, "GetFiles", null);
__decorate([
    (0, common_1.Get)("dirs/:DirID"),
    __param(0, (0, common_1.Param)("DirID", common_1.ParseIntPipe)),
    __param(1, (0, common_1.Query)("page", common_1.ParseIntPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, Number]),
    __metadata("design:returntype", Promise)
], FileControllers.prototype, "GetFilesByDir", null);
__decorate([
    (0, common_1.Get)("/recents/"),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], FileControllers.prototype, "GetRecentFiles", null);
__decorate([
    (0, common_1.Get)("/:FileID"),
    __param(0, (0, common_1.Param)("FileID", common_1.ParseIntPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], FileControllers.prototype, "GetFile", null);
__decorate([
    (0, common_1.Post)("/upload"),
    (0, common_1.UseInterceptors)((0, platform_express_1.FileInterceptor)("file", multer_config_1.multerConfig)),
    __param(0, (0, common_1.UploadedFile)()),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", Promise)
], FileControllers.prototype, "UploadFile", null);
__decorate([
    (0, common_1.Delete)("/:FileID"),
    __param(0, (0, common_1.Param)("FileID", common_1.ParseIntPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", void 0)
], FileControllers.prototype, "DeleteFile", null);
exports.FileControllers = FileControllers = __decorate([
    (0, common_1.Controller)("files"),
    __metadata("design:paramtypes", [file_service_1.FileService])
], FileControllers);
//# sourceMappingURL=file.controller.js.map