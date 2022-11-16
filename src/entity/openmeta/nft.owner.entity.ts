import { Column, Entity, JoinColumn, ManyToOne } from 'typeorm';
import { CollectionEntity } from './collection.entity';
import { NftEntity } from './nft.entity';
import { BaseEntity } from '../base.entity';

@Entity('nft_owners')
export class NftOwnerEntity extends BaseEntity {
  @Column()
  chain_id;

  @Column()
  wallet_address;

  @Column()
  contract_address;

  @Column()
  collection_id;

  @Column()
  token_id;

  @ManyToOne(() => CollectionEntity)
  @JoinColumn({ name: 'collection_id' })
  collection: CollectionEntity;

  @ManyToOne(() => NftEntity)
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
  nft: NftEntity;
}
