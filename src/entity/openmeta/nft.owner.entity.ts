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

  @ManyToOne(() => CollectionEntity)
  @JoinColumn({ name: 'collection_id' })
  collection: CollectionEntity;

  @ManyToOne(() => NftEntity)
  @JoinColumn([
    {
      name: 'collection_id',
      referencedColumnName: 'collection_id',
    },
    {
      name: 'token_id',
      referencedColumnName: 'token_id',
    },
  ])
  nft: NftEntity;
}
