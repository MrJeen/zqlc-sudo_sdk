import { Column, Entity, JoinColumn, ManyToOne, OneToMany } from 'typeorm';
import { CollectionEntity } from './collection.entity';
import { NftOwnerEntity } from './nft.owner.entity';
import { BaseEntity } from '../base.entity';

@Entity('nfts')
export class NftEntity extends BaseEntity {
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

  @ManyToOne(() => CollectionEntity)
  @JoinColumn({ name: 'collection_id' })
  collection: CollectionEntity;

  @OneToMany(() => NftOwnerEntity, (owner: NftOwnerEntity) => owner.nft)
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
  owners: NftOwnerEntity[];
}
