import { BaseEntity } from './base.entity';
import { Column, Entity, Index } from 'typeorm';

/**
 * 提取奖励记录表
 */
@Entity('sm_withdraw')
@Index(['chain_id', 'token_address', 'user_address'])
@Index(['chain_id', 'transaction_hash', 'log_index'], { unique: true })
export class SmWithdrawEntity extends BaseEntity {
  @Column('int', { default: 0, comment: '区块链id' })
  chain_id;

  @Column('varchar', { default: '', comment: '系列地址' })
  token_address;

  @Column('varchar', { default: '', comment: '用户地址' })
  user_address;

  @Column('decimal', {
    precision: 56,
    scale: 18,
    default: 0,
    comment: '提取金额',
  })
  amount;

  @Column('int', { default: 0, comment: '交易区块' })
  block_number;

  @Column('varchar', { default: '', comment: '交易哈希' })
  transaction_hash;

  @Column('int', { default: 0, comment: '日志索引值' })
  log_index;

  @Column('varchar', { default: '', comment: 'PID' })
  pid;
}
