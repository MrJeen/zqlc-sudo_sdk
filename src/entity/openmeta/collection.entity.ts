import { NftOwnerEntity } from './nft.owner.entity';
import { NftEntity } from './nft.entity';
import { Column, Entity, JoinColumn, OneToMany } from 'typeorm';
import { BaseEntity } from '../base.entity';

@Entity('collections', { name: 'openmeta' })
export class CollectionEntity extends BaseEntity {
  @Column()
  name: string;

  @Column()
  description: string;

  @Column()
  category_id: number;

  @Column()
  contract_address: string;

  @Column()
  chain_id: number;

  @Column()
  logo_url: string;

  @Column()
  featured_url: string;

  @Column()
  background_url: string;

  @Column()
  social_links: string;

  @Column()
  currency: string;

  @Column()
  is_certified: number;

  @Column()
  token_protocol: number;

  @OneToMany(() => NftOwnerEntity, (owner: NftOwnerEntity) => owner.collection)
  @JoinColumn({ referencedColumnName: 'collection_id' })
  owners: NftOwnerEntity[];

  @OneToMany(() => NftEntity, (nft: NftEntity) => nft.collection)
  @JoinColumn({ referencedColumnName: 'collection_id' })
  nfts: NftEntity[];
}
