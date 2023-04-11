import { Column, Entity, Index } from 'typeorm';
import { BaseEntity } from './base.entity';

@Entity('event_logs')
@Index(['token_address'])
@Index(['pool_address'])
@Index(['chain_id', 'transaction_hash', 'log_index'], { unique: true })
export class EventLogEntity extends BaseEntity {
  @Column('int', { default: 0, comment: '区块链id' })
  chain_id: number;

  @Column('varchar', { default: '', comment: '池子地址' })
  pool_address: string;

  @Column('varchar', { default: '', comment: '系列地址' })
  token_address: string;

  @Column('varchar', { default: '', comment: '币种地址' })
  currency: string;

  @Column('int2', {
    default: 0,
    comment: '池子类型（0: 买池，1: 卖池，2:流动池）',
  })
  pool_type: number;

  @Column('timestamp', { default: () => 'NOW()', comment: '订单创建时间' })
  block_time: Date;

  @Column('int', { default: 0, comment: '交易区块' })
  block_number: number;

  @Column('varchar', { default: '', comment: '交易哈希' })
  transaction_hash: string;

  @Column('int', { default: 0, comment: '日志索引值' })
  log_index: number;

  @Column('varchar', { default: '', comment: '事件名称' })
  event_name: string;

  @Column('json', { default: {}, comment: '明细' })
  info: object;
}
