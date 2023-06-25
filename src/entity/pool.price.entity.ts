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
  chain_id: number;

  @Column('varchar', { default: '', comment: '系列地址' })
  token_address: string;

  @Column('varchar', { default: '', comment: '池子地址' })
  pool_address: string;

  @Column('int2', {
    default: 0,
    comment: '池子类型（0: 买池，1: 卖池，2:流动池）',
  })
  pool_type: number;

  @Column('decimal', {
    precision: 56,
    scale: 18,
    default: 0,
    comment: '当前价',
  })
  price: number | string;

  @Column('decimal', {
    precision: 56,
    scale: 18,
    default: 0,
    comment: '用户购买价（即池子售价）',
  })
  buy_price: number | string;

  @Column('decimal', {
    precision: 56,
    scale: 18,
    default: 0,
    comment: '用户售价（即池子购买价）',
  })
  sell_price: number | string;
}
