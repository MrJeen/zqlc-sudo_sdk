import { BaseEntity } from './base.entity';
import { Column, Entity, Index } from 'typeorm';

@Entity('nft_transfer_logs')
@Index(['chain_id', 'token_address', 'token_id'])
@Index(['log_hash'], { unique: true })
export class NftTransferLogEntity extends BaseEntity {
  @Column('varchar', {
    default: '',
    comment: '日志哈希（MD5(chain_id+transaction_hash+log_index+token_id)）',
  })
  log_hash: string;

  @Column('int', { default: 0, comment: '区块链id' })
  chain_id: number;

  @Column('varchar', { default: '', comment: '池子地址' })
  pool_address: string;

  @Column('varchar', { default: '', comment: '系列地址' })
  token_address: string;

  @Column('varchar', { default: '', comment: 'nft id' })
  token_id: string;

  @Column('timestamp', { default: () => 'NOW()', comment: '订单创建时间' })
  create_time: Date;

  @Column('int', { default: 0, comment: '交易区块' })
  block_number: number;

  @Column('varchar', { default: '', comment: '交易哈希' })
  transaction_hash: string;

  @Column('int', { default: 0, comment: '日志索引值' })
  log_index: number;

  @Column('int2', { default: 0, comment: '类型（1: 转入，2：转出，3：交易）' })
  transfer_type: number;

  @Column('varchar', { default: '', comment: '转出地址' })
  from_address: string;

  @Column('varchar', { default: '', comment: '转入地址' })
  to_address: string;

  @Column('decimal', {
    precision: 56,
    scale: 18,
    default: 0,
    comment: '价格',
  })
  price: number | string;
}

export enum TRANSFER_TYPE {
  DEPOSIT = 1,
  WITHDRAW = 2,
  TRADE = 3,
}
