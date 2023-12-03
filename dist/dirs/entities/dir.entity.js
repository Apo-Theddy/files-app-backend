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
exports.Dir = void 0;
const typeorm_1 = require("typeorm");
let Dir = class Dir {
};
exports.Dir = Dir;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)({ name: "DirID" }),
    __metadata("design:type", Number)
], Dir.prototype, "DirID", void 0);
__decorate([
    (0, typeorm_1.Column)({
        type: "varchar",
        name: "DirName",
        nullable: false
    }),
    (0, typeorm_1.Index)({ unique: true }),
    __metadata("design:type", String)
], Dir.prototype, "DirName", void 0);
__decorate([
    (0, typeorm_1.Column)({
        type: "varchar",
        name: "CreationDate",
        nullable: true,
        default: () => `SYSDATETIME()`
    }),
    __metadata("design:type", String)
], Dir.prototype, "CreationDate", void 0);
__decorate([
    (0, typeorm_1.Column)({
        type: "varchar",
        name: "DeleteDate",
        nullable: true,
    }),
    __metadata("design:type", String)
], Dir.prototype, "DeleteDate", void 0);
exports.Dir = Dir = __decorate([
    (0, typeorm_1.Entity)({ name: "Dir" })
], Dir);
//# sourceMappingURL=dir.entity.js.map