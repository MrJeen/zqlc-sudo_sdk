import { NftEntity } from './nft.entity';
import { Column, Entity, OneToMany } from 'typeorm';
import { OpenMetaBaseEntity } from '../base.entity';

@Entity('collections')
export class CollectionEntity extends OpenMetaBaseEntity {
  @Column()
  name: number;

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
  is_certified: boolean;

  @Column()
  token_protocol: string;

  @Column({ type: 'json' })
  metadata: object;

  @Column({ type: 'json' })
  properties: object;

  @Column({ type: 'json' })
  rarity: object;

  @OneToMany(() => NftEntity, (nfts: NftEntity) => nfts.collection)
  nfts: NftEntity[];
}
