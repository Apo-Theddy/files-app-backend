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
exports.File = void 0;
const dir_entity_1 = require("../../dirs/entities/dir.entity");
const typeorm_1 = require("typeorm");
let File = class File {
};
exports.File = File;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)({ name: "FileID" }),
    __metadata("design:type", Number)
], File.prototype, "FileID", void 0);
__decorate([
    (0, typeorm_1.Column)({
        type: "varchar",
        name: "OriginalName",
        nullable: false
    }),
    __metadata("design:type", String)
], File.prototype, "OriginalName", void 0);
__decorate([
    (0, typeorm_1.Column)({
        type: "varchar",
        name: "UniqueName",
        nullable: false
    }),
    __metadata("design:type", String)
], File.prototype, "UniqueName", void 0);
__decorate([
    (0, typeorm_1.Column)({
        type: "varchar",
        name: "TypeExtension",
        nullable: false
    }),
    __metadata("design:type", String)
], File.prototype, "TypeExtension", void 0);
__decorate([
    (0, typeorm_1.Column)({
        type: "varchar",
        name: "Path",
        nullable: false
    }),
    __metadata("design:type", String)
], File.prototype, "Path", void 0);
__decorate([
    (0, typeorm_1.Column)({
        type: "int",
        name: "Width",
        nullable: true
    }),
    __metadata("design:type", Number)
], File.prototype, "Width", void 0);
__decorate([
    (0, typeorm_1.Column)({
        type: "int",
        name: "Height",
        nullable: true
    }),
    __metadata("design:type", Number)
], File.prototype, "Height", void 0);
__decorate([
    (0, typeorm_1.Column)({
        type: "float",
        name: "Size",
        nullable: true,
    }),
    __metadata("design:type", Number)
], File.prototype, "Size", void 0);
__decorate([
    (0, typeorm_1.Column)({
        type: "varchar",
        name: "CreationDate",
        nullable: true,
        default: () => `SYSDATETIME()`
    }),
    __metadata("design:type", String)
], File.prototype, "CreationDate", void 0);
__decorate([
    (0, typeorm_1.Column)({
        type: "varchar",
        name: "DeleteDate",
        nullable: true
    }),
    __metadata("design:type", String)
], File.prototype, "DeleteDate", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => dir_entity_1.Dir, { eager: true, nullable: true }),
    (0, typeorm_1.JoinColumn)({ name: "DirID" }),
    __metadata("design:type", dir_entity_1.Dir)
], File.prototype, "Dir", void 0);
exports.File = File = __decorate([
    (0, typeorm_1.Entity)({ name: "File" })
], File);
//# sourceMappingURL=file.entity.js.map