import { BaseEntity } from './base.entity';
import { Column, Entity, Index, OneToMany, OneToOne } from 'typeorm';
import { OrderNftEntity } from './order.nft.entity';
import { now } from 'moment';

@Entity('orders')
@Index(['pool_address'])
@Index(['token_address'])
@Index(['transaction_hash', 'log_index'], { unique: true })
export class OrderEntity extends BaseEntity {
  @Column('int', { default: 0, comment: '区块链id' })
  chain_id;

  @Column('varchar', { default: '', comment: '池子地址' })
  pool_address;

  @Column('varchar', { default: '', comment: '系列地址' })
  token_address;

  @Column('timestamp', { default: new Date(), comment: '交易时间' })
  create_time;

  @Column('int', { default: 0, comment: '交易区块' })
  block_number;

  @Column('varchar', { default: '', comment: '交易哈希' })
  transaction_hash;

  @Column('int', { default: 0, comment: '日志索引值' })
  log_index;

  @Column('int2', { default: 0, comment: '类型（1: 买，2: 卖）' })
  type;

  @Column('varchar', { default: '', comment: '卖方' })
  from_address;

  @Column('varchar', { default: '', comment: '买方' })
  to_address;

  @Column('decimal', {
    precision: 36,
    scale: 20,
    default: 0,
    comment: '价格',
  })
  amount;

  @Column('int', { default: 0, comment: '交易的nft数量' })
  nft_count;

  @OneToMany(() => OrderNftEntity, (nft: OrderNftEntity) => nft.order)
  nfts: OrderNftEntity[];
}
