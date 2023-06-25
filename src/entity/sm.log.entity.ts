import { BaseEntity } from './base.entity';
import { Column, Entity, Index } from 'typeorm';

/**
 * 交易挖矿记录表
 */
@Entity('sm_logs')
@Index(['chain_id'])
@Index(['token_address', 'user_address'])
@Index(['chain_id', 'transaction_hash', 'log_index'], { unique: true })
export class SmLogEntity extends BaseEntity {
  @Column('int', { default: 0, comment: '区块链id' })
  chain_id: number;

  @Column('varchar', { default: '', comment: '系列地址' })
  token_address: string;

  @Column('varchar', { default: '', comment: '用户地址' })
  user_address: string;

  @Column('decimal', {
    precision: 56,
    scale: 18,
    default: 0,
    comment: '挖矿金额',
  })
  amount: number | string;

  @Column('int', { default: 0, comment: '交易区块' })
  block_number: number;

  @Column('varchar', { default: '', comment: '交易哈希' })
  transaction_hash: string;

  @Column('int', { default: 0, comment: '日志索引值' })
  log_index: number;
}
