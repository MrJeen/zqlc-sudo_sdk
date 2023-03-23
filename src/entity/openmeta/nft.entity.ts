import { Column, Entity, JoinColumn, ManyToOne, OneToMany } from 'typeorm';
import { CollectionEntity } from './collection.entity';
import { OpenMetaBaseEntity } from '../base.entity';
import { NftOwnerEntity } from './nft.owner.entity';

@Entity('nfts')
export class NftEntity extends OpenMetaBaseEntity {
  @Column()
  chain_id: number;

  @Column()
  collection_id: number;

  @Column()
  contract_address: string;

  @Column()
  name: string;

  @Column()
  token_id: string;

  @Column()
  img_url: string;

  @Column()
  token_protocol: number;

  @Column()
  is_mint: boolean;

  @Column({ type: 'json' })
  metadata;

  @ManyToOne(() => CollectionEntity)
  @JoinColumn({ name: 'collection_id', referencedColumnName: 'id' })
  collection: CollectionEntity;

  @OneToMany(() => NftOwnerEntity, (owner: NftOwnerEntity) => owner.nft)
  owners: NftOwnerEntity[];
}
