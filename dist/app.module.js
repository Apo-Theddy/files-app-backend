"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppModule = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_config_1 = require("./config/typeorm.config");
const config_1 = require("@nestjs/config");
const path_1 = require("path");
const dir_module_1 = require("./dirs/dir.module");
const file_module_1 = require("./files/file.module");
const index_module_1 = require("./index/index.module");
const serve_static_1 = require("@nestjs/serve-static");
let AppModule = class AppModule {
};
exports.AppModule = AppModule;
exports.AppModule = AppModule = __decorate([
    (0, common_1.Module)({
        imports: [
            serve_static_1.ServeStaticModule.forRoot({
                rootPath: (0, path_1.join)(__dirname, "..", "./uploads"),
                serveRoot: "/uploads"
            }),
            config_1.ConfigModule.forRoot({
                envFilePath: (0, path_1.join)(__dirname, '../.dev.env'),
                isGlobal: true,
            }),
            typeorm_1.TypeOrmModule.forRootAsync({
                inject: [config_1.ConfigService],
                useFactory: async (config) => (0, typeorm_config_1.TypeOrmConfig)(config),
            }),
            index_module_1.IndexModule, file_module_1.FileModule, dir_module_1.DirModule
        ],
    })
], AppModule);
//# sourceMappingURL=app.module.js.map