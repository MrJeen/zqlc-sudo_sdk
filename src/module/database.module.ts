import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigService } from '@nestjs/config';
import { DATABASE_OPENMETA_NAME } from '../config/constant';

@Module({
  imports: [
    TypeOrmModule.forRootAsync({
      useFactory: (configService: ConfigService) =>
        configService.get('database'),
      inject: [ConfigService],
    }),

    // openmeta
    TypeOrmModule.forRootAsync({
      name: DATABASE_OPENMETA_NAME,
      useFactory: (configService: ConfigService) =>
        configService.get('database_openmeta'),
      inject: [ConfigService],
    }),
  ],
  exports: [TypeOrmModule],
})
export class DatabaseModule {}
