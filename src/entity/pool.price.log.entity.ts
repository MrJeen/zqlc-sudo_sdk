import { BaseEntity } from './base.entity';
import { Column, Entity } from 'typeorm';

@Entity('pool_price_log')
export class PoolPriceLogEntity extends BaseEntity {
  @Column('int', { default: 0, comment: '区块链id' })
  chain_id;

  @Column('varchar', { default: '', comment: '系列地址' })
  token_address;

  @Column('decimal', {
    precision: 36,
    scale: 20,
    default: 0,
    comment: '地板价(卖池的最低价)',
  })
  floor_price;
}
