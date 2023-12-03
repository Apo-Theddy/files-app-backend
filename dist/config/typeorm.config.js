"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TypeOrmConfig = void 0;
const TypeOrmConfig = (config) => {
    return {
        type: "mssql",
        host: config.get("DB_HOST"),
        port: parseInt(config.get("DB_PORT")) || 3000,
        username: config.get("DB_USER"),
        password: config.get("DB_USER_PASSWORD"),
        database: config.get("DB_NAME"),
        autoLoadEntities: true,
        synchronize: true,
        extra: {
            "trustServerCertificate": true,
            "encrypt": true
        }
    };
};
exports.TypeOrmConfig = TypeOrmConfig;
//# sourceMappingURL=typeorm.config.js.map