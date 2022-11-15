import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigService } from '@nestjs/config';
import { ContractEntity } from '../entity/contract.entity';
import { CollectionEntity } from '../entity/openmeta/collection.entity';
import { NftOwnerEntity } from '../entity/openmeta/nft.owner.entity';
import { NftEntity } from '../entity/openmeta/nft.entity';

@Module({
  imports: [
    TypeOrmModule.forRootAsync({
      useFactory: (configService: ConfigService) => ({
        ...configService.get('database'),
        entities: [ContractEntity],
      }),
      inject: [ConfigService],
    }),

    // openmeta
    TypeOrmModule.forRootAsync({
      name: 'openmeta',
      useFactory: (configService: ConfigService) => ({
        ...configService.get('database_openmeta'),
        entities: [CollectionEntity, NftOwnerEntity, NftEntity],
      }),
      inject: [ConfigService],
    }),
  ],
  exports: [TypeOrmModule],
})
export class DatabaseModule {}
