"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GenerateFilename = exports.multerConfig = void 0;
const uuid_1 = require("uuid");
const multer_1 = require("multer");
const path_1 = require("path");
exports.multerConfig = {
    dest: "./uploads",
    storage: (0, multer_1.memoryStorage)()
};
const GenerateFilename = (file) => {
    const ext = (0, path_1.extname)(file.originalname);
    const uuid = (0, uuid_1.v4)();
    return `${uuid}${ext}`;
};
exports.GenerateFilename = GenerateFilename;
//# sourceMappingURL=multer.config.js.map