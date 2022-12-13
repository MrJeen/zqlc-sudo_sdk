import { Column, Entity, Index } from 'typeorm';
import { BaseEntity } from './base.entity';

/**
 * 所有买池（包括流动池）的余额变化
 */
@Entity('pool_price')
@Index(['created_at'])
@Index(['chain_id', 'token_address'])
export class PoolPriceEntity extends BaseEntity {
  @Column('int', { default: 0, comment: '区块链id' })
  chain_id;

  @Column('varchar', { default: '', comment: '系列地址' })
  token_address;

  @Column('varchar', { default: '', comment: '池子地址' })
  pool_address;

  @Column('decimal', {
    precision: 36,
    scale: 20,
    default: 0,
    comment: '当前价',
  })
  price;
}
