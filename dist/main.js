"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@nestjs/core");
const app_module_1 = require("./app.module");
const fs_1 = require("fs");
async function bootstrap() {
    if (!(0, fs_1.existsSync)("./uploads"))
        (0, fs_1.mkdirSync)("./uploads");
    const app = await core_1.NestFactory.create(app_module_1.AppModule);
    await app.listen(3000);
}
bootstrap();
//# sourceMappingURL=main.js.map