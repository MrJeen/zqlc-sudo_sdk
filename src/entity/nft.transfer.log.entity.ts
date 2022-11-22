import { BaseEntity } from './base.entity';
import { Column, Entity, Index } from 'typeorm';

@Entity('nft_transfer_logs')
@Index(['token_address', 'token_id'])
@Index(['transaction_hash', 'log_index'], { unique: true })
export class NftTransferLogEntity extends BaseEntity {
  @Column('int', { default: 0, comment: '区块链id' })
  chain_id;

  @Column('varchar', { default: '', comment: '池子地址' })
  pool_address;

  @Column('varchar', { default: '', comment: '系列地址' })
  token_address;

  @Column('varchar', { default: '', comment: 'nft id' })
  token_id;

  @Column('timestamp', { default: () => 'NOW()', comment: '订单创建时间' })
  create_time;

  @Column('int', { default: 0, comment: '交易区块' })
  block_number;

  @Column('varchar', { default: '', comment: '交易哈希' })
  transaction_hash;

  @Column('int', { default: 0, comment: '日志索引值' })
  log_index;

  @Column('int2', { default: 0, comment: '类型（1: 转入，2：转出，3：交易）' })
  transfer_type;

  @Column('varchar', { default: '', comment: '转出地址' })
  from_address;

  @Column('varchar', { default: '', comment: '转入地址' })
  to_address;

  @Column('decimal', {
    precision: 36,
    scale: 20,
    default: 0,
    comment: '价格',
  })
  price;
}

export enum TRANSFER_TYPE {
  DEPOSIT = 1,
  WITHDRAW = 2,
  TRADE = 3,
}
