import { AfterLoad, Column, Entity, JoinColumn, ManyToOne } from 'typeorm';
import { CollectionEntity } from './collection.entity';
import { OpenMetaBaseEntity } from '../base.entity';
import { transformNftImg } from '../../utils/helper.util';

@Entity('nfts')
export class NftEntity extends OpenMetaBaseEntity {
  @Column()
  chain_id: number;

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

  @AfterLoad()
  async checkOssUrl() {
    this.img_url = await transformNftImg(this.img_url);
  }
}
