import { NftOwnerEntity } from './nft.owner.entity';
import { NftEntity } from './nft.entity';
import { Column, Entity, JoinColumn, OneToMany } from 'typeorm';
import { BaseEntity } from '../base.entity';

@Entity('collections')
export class CollectionEntity extends BaseEntity {
  @Column()
  name;

  @Column()
  description;

  @Column()
  category_id;

  @Column()
  contract_address;

  @Column()
  chain_id;

  @Column()
  logo_url;

  @Column()
  featured_url;

  @Column()
  background_url;

  @Column()
  social_links;

  @Column()
  currency;

  @Column()
  is_certified;

  @Column()
  token_protocol;

  @OneToMany(() => NftOwnerEntity, (owner: NftOwnerEntity) => owner.collection)
  @JoinColumn({ referencedColumnName: 'collection_id' })
  owners: NftOwnerEntity[];

  @OneToMany(() => NftEntity, (nft: NftEntity) => nft.collection)
  @JoinColumn({ referencedColumnName: 'collection_id' })
  nfts: NftEntity[];
}
