import { BaseEntity } from './base.entity';
import { Column, Entity, Index, JoinColumn, ManyToOne } from 'typeorm';
import { PoolEntity } from './pool.entity';

@Entity('pool_price_log')
@Index(['pool_id'])
@Index(['log_hash'], { unique: true })
export class PoolPriceLogEntity extends BaseEntity {
  @Column('int', { default: 0, comment: '区块链id' })
  chain_id;

  @Column('bigint', { default: 0, comment: '池子ID' })
  pool_id;

  @Column('decimal', {
    precision: 36,
    scale: 20,
    default: 0,
    comment: '初始价格（当前价格）',
  })
  initial_price;

  @Column('varchar', {
    default: '',
    comment: '日志哈希（MD5(chain_id+transaction_hash+log_index+token_id)）',
  })
  log_hash;

  @Column('timestamp', { default: () => 'NOW()', comment: '订单创建时间' })
  create_time;

  @Column('int', { default: 0, comment: '交易区块' })
  block_number;

  @Column('varchar', { default: '', comment: '交易哈希' })
  transaction_hash;

  @Column('int', { default: 0, comment: '日志索引值' })
  log_index;

  @ManyToOne(() => PoolEntity)
  @JoinColumn({ name: 'pool_id' })
  pool: PoolEntity;
}
