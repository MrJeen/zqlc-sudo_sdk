import { Column, Entity, JoinColumn, ManyToOne, OneToMany } from 'typeorm';
import { CollectionEntity } from './collection.entity';
import { NftOwnerEntity } from './nft.owner.entity';
import { BaseEntity } from '../base.entity';

@Entity('nfts')
export class NftEntity extends BaseEntity {
  @Column()
  chain_id;

  @Column()
  collection_id;

  @Column()
  contract_address;

  @Column()
  name;

  @Column()
  token_id;

  @Column()
  img_url;

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
