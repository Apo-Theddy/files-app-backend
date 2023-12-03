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
exports.DirController = void 0;
const common_1 = require("@nestjs/common");
const dir_service_1 = require("../services/dir.service");
const update_dir_dto_1 = require("../dto/update-dir.dto");
let DirController = class DirController {
    constructor(dirService) {
        this.dirService = dirService;
    }
    GetAllDirs() {
        return this.dirService.GetDirs();
    }
    GetDirs(page) {
        return this.dirService.GetDirs();
    }
    GetDir(DirID) {
        return this.dirService.GetDir(DirID);
    }
    GetDirByName(DirName) {
        return this.dirService.GetDirByName(DirName);
    }
    AddDir(body) {
        return this.dirService.AddDir(body.DirName);
    }
    UpdateDir(updateDirDto) {
        return this.dirService.UpdateDir(updateDirDto);
    }
    DeleteDir(DirID) {
        this.dirService.DeleteDir(DirID);
    }
};
exports.DirController = DirController;
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], DirController.prototype, "GetAllDirs", null);
__decorate([
    (0, common_1.Get)("/pages"),
    __param(0, (0, common_1.Query)("page", common_1.ParseIntPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], DirController.prototype, "GetDirs", null);
__decorate([
    (0, common_1.Get)("/:DirID"),
    __param(0, (0, common_1.Param)("DirID", common_1.ParseIntPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], DirController.prototype, "GetDir", null);
__decorate([
    (0, common_1.Get)("search/:DirName"),
    __param(0, (0, common_1.Param)("DirName")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], DirController.prototype, "GetDirByName", null);
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], DirController.prototype, "AddDir", null);
__decorate([
    (0, common_1.Put)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [update_dir_dto_1.UpdateDirDto]),
    __metadata("design:returntype", Promise)
], DirController.prototype, "UpdateDir", null);
__decorate([
    (0, common_1.Delete)("/:DirID"),
    __param(0, (0, common_1.Param)("DirID", common_1.ParseIntPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", void 0)
], DirController.prototype, "DeleteDir", null);
exports.DirController = DirController = __decorate([
    (0, common_1.Controller)("dirs"),
    __metadata("design:paramtypes", [dir_service_1.DirService])
], DirController);
//# sourceMappingURL=dir.controller.js.map