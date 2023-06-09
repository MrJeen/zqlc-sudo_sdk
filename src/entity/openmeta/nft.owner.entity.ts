import { Column, Entity, JoinColumn, ManyToOne } from 'typeorm';
import { CollectionEntity } from './collection.entity';
import { OpenMetaBaseEntity } from '../base.entity';
import { NftEntity } from './nft.entity';

@Entity('nft_owners')
export class NftOwnerEntity extends OpenMetaBaseEntity {
  @Column()
  chain_id: number;

  @Column()
  wallet_address: string;

  @Column()
  contract_address: string;

  @Column()
  collection_id: number;

  @Column()
  token_id: string;

  @ManyToOne(() => CollectionEntity, { createForeignKeyConstraints: false })
  @JoinColumn([
    {
      name: 'chain_id',
      referencedColumnName: 'chain_id',
    },
    {
      name: 'contract_address',
      referencedColumnName: 'contract_address',
    },
  ])
  collection: CollectionEntity;

  @ManyToOne(() => NftEntity, { createForeignKeyConstraints: false })
  @JoinColumn([
    {
      name: 'chain_id',
      referencedColumnName: 'chain_id',
    },
    {
      name: 'contract_address',
      referencedColumnName: 'contract_address',
    },
    {
      name: 'token_id',
      referencedColumnName: 'token_id',
    },
  ])
  nft: NftEntity;
}
