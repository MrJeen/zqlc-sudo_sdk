import { BaseEntity } from './base.entity';
import { Column, Entity } from 'typeorm';

@Entity('pool_nfts')
export class PoolNftEntity extends BaseEntity {
  @Column('numeric', { default: '', comment: '池子ID' })
  pool_id;

  @Column('jsonb', { default: [], comment: 'nft明细' })
  nft_list;
}
