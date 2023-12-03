"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.IndexModule = void 0;
const common_1 = require("@nestjs/common");
const dir_module_1 = require("../dirs/dir.module");
const file_module_1 = require("../files/file.module");
const index_controller_1 = require("./controller/index.controller");
const index_service_1 = require("./src/index.service");
let IndexModule = class IndexModule {
};
exports.IndexModule = IndexModule;
exports.IndexModule = IndexModule = __decorate([
    (0, common_1.Module)({
        imports: [dir_module_1.DirModule, file_module_1.FileModule],
        controllers: [index_controller_1.IndexController],
        providers: [index_service_1.IndexService],
    })
], IndexModule);
//# sourceMappingURL=index.module.js.map