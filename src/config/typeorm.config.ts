import { TypeOrmModuleOptions } from "@nestjs/typeorm";
import { ConfigService } from "@nestjs/config"

export const TypeOrmConfig = (config: ConfigService): TypeOrmModuleOptions => {
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
    }
}