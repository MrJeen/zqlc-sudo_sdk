import { BaseEntity } from './base.entity';
import { Column, Entity, Index } from 'typeorm';

/**
 * 用户挖矿期间交易记录表
 */
@Entity('sm_orders')
@Index(['chain_id', 'token_address', 'user_address'])
@Index(['chain_id', 'transaction_hash', 'log_index'], { unique: true })
export class SmOrderEntity extends BaseEntity {
  @Column('int', { default: 0, comment: '区块链id' })
  chain_id: number;

  @Column('varchar', { default: '', comment: '系列地址' })
  token_address: string;

  @Column('varchar', { default: '', comment: '用户地址' })
  user_address: string;

  @Column('int2', { default: 0, comment: '交易类型（1: 买，2: 卖）' })
  type: number;

  @Column('decimal', {
    precision: 56,
    scale: 18,
    default: 0,
    comment: '交易金额',
  })
  amount: number;

  @Column('int', { default: 0, comment: '交易区块' })
  block_number: number;

  @Column('varchar', { default: '', comment: '交易哈希' })
  transaction_hash: string;

  @Column('int', { default: 0, comment: '日志索引值' })
  log_index: number;

  @Column('int2', { default: 0, comment: '是否已被提取（0: 否，1: 是）' })
  is_out: number;
}
