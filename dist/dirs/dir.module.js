"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.DirModule = void 0;
const common_1 = require("@nestjs/common");
const dir_service_1 = require("./services/dir.service");
const typeorm_1 = require("@nestjs/typeorm");
const file_entity_1 = require("../files/entities/file.entity");
const dir_entity_1 = require("./entities/dir.entity");
const dir_controller_1 = require("./controllers/dir.controller");
let DirModule = class DirModule {
};
exports.DirModule = DirModule;
exports.DirModule = DirModule = __decorate([
    (0, common_1.Module)({
        imports: [typeorm_1.TypeOrmModule.forFeature([dir_entity_1.Dir, file_entity_1.File])],
        controllers: [dir_controller_1.DirController],
        providers: [dir_service_1.DirService],
        exports: [dir_service_1.DirService]
    })
], DirModule);
//# sourceMappingURL=dir.module.js.map