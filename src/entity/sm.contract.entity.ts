import { BaseEntity } from './base.entity';
import { Column, Entity, Index } from 'typeorm';

/**
 * 交易挖矿系列表
 */
@Entity('sm_contracts')
@Index(['chain_id', 'token_address', 'mining_date'], { unique: true })
@Index(['pid', 'mining_date'], { unique: true })
export class SmContractEntity extends BaseEntity {
  @Column('int', { default: 0, comment: '区块链id' })
  chain_id;

  @Column('varchar', { default: '', comment: '系列地址' })
  token_address;

  @Column('smallint', { default: 0, comment: '权重（满值100）' })
  weight;

  @Column('varchar', { default: '', comment: 'PID' })
  pid;

  @Column('timestamp', { default: () => 'NOW()', comment: '挖矿开始时间' })
  start_time;

  @Column('timestamp', { default: () => 'NOW()', comment: '挖矿结束时间' })
  end_time;

  @Column('bigint', { default: 0, comment: '开始区块' })
  start_block;

  @Column('bigint', { default: 0, comment: '结束区块' })
  end_block;

  @Column('varchar', { default: '', comment: '类型（auto, manual）' })
  type;

  @Column('varchar', { default: '', comment: '挖矿日期' })
  mining_date;

  @Column('decimal', {
    precision: 56,
    scale: 18,
    default: 0,
    comment: '当前总奖励',
  })
  reward;

  @Column('decimal', {
    precision: 56,
    scale: 18,
    default: 0,
    comment: '累计交易总额',
  })
  total_swap_amount;

  @Column('decimal', {
    precision: 56,
    scale: 18,
    default: 0,
    comment: '当前交易额',
  })
  swap_amount;
}
