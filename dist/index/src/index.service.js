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
Object.defineProperty(exports, "__esModule", { value: true });
exports.IndexService = void 0;
const dir_service_1 = require("../../dirs/services/dir.service");
const file_service_1 = require("../../files/services/file.service");
const check_disk_space_1 = require("check-disk-space");
const common_1 = require("@nestjs/common");
let IndexService = class IndexService {
    constructor(fileService, dirService) {
        this.fileService = fileService;
        this.dirService = dirService;
    }
    async getStorage() {
        const diskSpace = await (0, check_disk_space_1.default)("c:\\");
        const TotalSpace = this.convertToGB(diskSpace.size);
        const FreeSpace = this.convertToGB(diskSpace.free);
        const UsedSpace = TotalSpace - FreeSpace;
        return { TotalSpace, FreeSpace, UsedSpace };
    }
    convertToGB(size) {
        return size / Math.pow(10, 9);
    }
    ;
    async GetIndex(dirPage = 1, filePage = 1) {
        const [RecentFiles, Files, Dirs] = await Promise.all([
            this.fileService.GetRecentFiles(),
            this.fileService.GetFiles(filePage),
            this.dirService.GetDirs(dirPage),
        ]);
        return { RecentFiles, Files, Dirs, };
    }
};
exports.IndexService = IndexService;
exports.IndexService = IndexService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [file_service_1.FileService,
        dir_service_1.DirService])
], IndexService);
//# sourceMappingURL=index.service.js.map