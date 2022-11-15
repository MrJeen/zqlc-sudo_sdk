import { Global, Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigService } from '@nestjs/config';
import { ContractEntity } from '../entity/contract.entity';
import { CollectionEntity } from '../entity/openmeta/collection.entity';
import { NftOwnerEntity } from '../entity/openmeta/nft.owner.entity';
import { NftEntity } from '../entity/openmeta/nft.entity';

@Global()
@Module({
  imports: [
    TypeOrmModule.forRootAsync({
      useFactory: (configService: ConfigService) =>
        configService.get('database'),
      inject: [ConfigService],
    }),
    TypeOrmModule.forFeature([ContractEntity]),

    // openmeta
    TypeOrmModule.forRootAsync({
      name: 'openmeta',
      useFactory: (configService: ConfigService) =>
        configService.get('database_openmeta'),
      inject: [ConfigService],
    }),
    TypeOrmModule.forFeature(
      [CollectionEntity, NftOwnerEntity, NftEntity],
      'openmeta',
    ),
  ],
  exports: [TypeOrmModule],
})
export class DatabaseModule {}
