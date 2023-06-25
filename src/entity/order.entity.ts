import { BaseEntity } from './base.entity';
import { Column, Entity, Index, OneToMany } from 'typeorm';
import { OrderNftEntity } from './order.nft.entity';

@Entity('orders')
@Index(['chain_id', 'pool_address'])
@Index(['chain_id', 'token_address'])
@Index(['chain_id', 'transaction_hash', 'log_index'], { unique: true })
export class OrderEntity extends BaseEntity {
  @Column('int', { default: 0, comment: '区块链id' })
  chain_id: number;

  @Column('varchar', { default: '', comment: '池子地址' })
  pool_address: string;

  @Column('varchar', { default: '', comment: '系列地址' })
  token_address: string;

  @Column('timestamp', { default: () => 'NOW()', comment: '订单创建时间' })
  create_time: Date;

  @Column('int', { default: 0, comment: '交易区块' })
  block_number: number;

  @Column('varchar', { default: '', comment: '交易哈希' })
  transaction_hash: string;

  @Column('int', { default: 0, comment: '日志索引值' })
  log_index: number;

  @Column('int2', { default: 0, comment: '类型（1: 买，2: 卖）' })
  type: number;

  @Column('varchar', { default: '', comment: '卖方' })
  from_address: string;

  @Column('varchar', { default: '', comment: '买方' })
  to_address: string;

  @Column('decimal', {
    precision: 56,
    scale: 18,
    default: 0,
    comment: '价格',
  })
  amount: number | string;

  @Column('int', { default: 0, comment: '交易的nft数量' })
  nft_count: number;

  @OneToMany(() => OrderNftEntity, (nft: OrderNftEntity) => nft.order)
  nfts: OrderNftEntity[];
}
