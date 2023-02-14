import { Column, Entity, Index } from 'typeorm';
import { BaseEntity } from './base.entity';

/**
 * 所有买池（包括流动池）的余额变化
 */
@Entity('pool_tvl')
@Index(['date'])
@Index(['chain_id', 'token_address'])
export class PoolTvlEntity extends BaseEntity {
  @Column('int', { default: 0, comment: '区块链id' })
  chain_id;

  @Column('varchar', { default: '', comment: '系列地址' })
  token_address;

  @Column('varchar', { default: '', comment: '池子地址' })
  pool_address;

  @Column('int2', {
    default: 0,
    comment: '池子类型（0: 买池，1: 卖池，2:流动池）',
  })
  pool_type;

  @Column('varchar', { default: '', comment: '日期' })
  date;

  @Column('decimal', {
    precision: 56,
    scale: 18,
    default: 0,
    comment: '余额',
  })
  tvl;
}
