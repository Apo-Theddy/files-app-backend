import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TypeOrmConfig } from './config/typeorm.config';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { join } from 'path';
import { DirModule } from './dirs/dir.module';
import { FileModule } from './files/file.module';
import { IndexModule } from './index/index.module';
import { ServeStaticModule } from '@nestjs/serve-static';

@Module({
  imports: [
    ServeStaticModule.forRoot({
      rootPath: join(__dirname, "..", "./uploads"),
      serveRoot: "/uploads"
    }),
    ConfigModule.forRoot({
      envFilePath: join(__dirname, '../.dev.env'),
      isGlobal: true,
    }),
    TypeOrmModule.forRootAsync({
      inject: [ConfigService],
      useFactory: async (config: ConfigService) => TypeOrmConfig(config),
    }),
    IndexModule, FileModule, DirModule
  ],
})

export class AppModule { }
