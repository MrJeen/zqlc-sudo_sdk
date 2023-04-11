import { BaseEntity } from './base.entity';
import { Column, Entity, Index } from 'typeorm';

/**
 * 交易挖矿系列表
 */
@Entity('sm_contracts')
@Index(['chain_id'])
@Index(['token_address'])
@Index(['start_time', 'end_time'])
export class SmContractEntity extends BaseEntity {
  @Column('int', { default: 0, comment: '区块链id' })
  chain_id: number;

  @Column('varchar', { default: '', comment: '系列地址' })
  token_address: string;

  @Column('smallint', { default: 0, comment: '权重（满值100）' })
  weight: number;

  @Column('varchar', { default: '', comment: 'PID' })
  pid: string;

  @Column('timestamp', { default: () => 'NOW()', comment: '挖矿开始时间' })
  start_time: Date;

  @Column('timestamp', { default: () => 'NOW()', comment: '挖矿结束时间' })
  end_time: Date;

  @Column('bigint', { default: 0, comment: '开始区块' })
  start_block: number;

  @Column('bigint', { default: 0, comment: '结束区块' })
  end_block: number;

  @Column('varchar', { default: '', comment: '类型（auto, manual）' })
  type: string;

  @Column('smallint', {
    default: 0,
    comment: '处理状态（0-未设置权重 20-设置成功）',
  })
  status: number;

  @Column('decimal', {
    precision: 56,
    scale: 18,
    default: 0,
    comment: '累计交易总额',
  })
  total_swap_amount: number;

  @Column('decimal', {
    precision: 56,
    scale: 18,
    default: 0,
    comment: '当前交易额',
  })
  swap_amount: number;
}

export enum SWAP_CONTRACT_TYPE {
  AUTO = 'auto',
  MANUAL = 'manual',
}

export enum SWAP_ALLOC_STATUS {
  DEFAULT,
  FINISHED = 20,
}
