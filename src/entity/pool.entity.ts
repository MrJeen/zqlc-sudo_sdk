import { Column, Entity, Index, OneToOne } from 'typeorm';
import { BaseEntity } from './base.entity';
import { PoolNftEntity } from './pool.nft.entity';

@Entity('pools')
@Index(['chain_id', 'pool_address'], { unique: true })
export class PoolEntity extends BaseEntity {
  @Column('int', { default: 0, comment: '区块链id' })
  chain_id;

  @Column('varchar', { default: '', comment: '池子地址' })
  pool_address;

  @Column('varchar', { default: '', comment: '拥有者地址' })
  owner_address;

  @Column('varchar', { default: '', comment: '系列地址' })
  token_address;

  @Column('varchar', { default: '', comment: '曲线地址' })
  curve_address;

  @Column('varchar', { default: '', comment: '收款方地址' })
  recipient_address;

  @Column('int2', {
    default: 0,
    comment: '池子类型（0: 买池，1: 卖池，2:流动池）',
  })
  type;

  @Column('decimal', {
    precision: 36,
    scale: 20,
    default: 0,
    comment: '增量',
  })
  curve_increment;

  @Column('decimal', {
    precision: 36,
    scale: 20,
    default: 0,
    comment: '手续费',
  })
  fee;

  @Column('decimal', {
    precision: 36,
    scale: 20,
    default: 0,
    comment: '初始价格',
  })
  initial_price;

  @Column('decimal', {
    precision: 36,
    scale: 20,
    default: 0,
    comment: '池子里eth数量',
  })
  balance;

  @Column('int', { default: 0, comment: '池子创建时的区块' })
  create_block_number;

  @Column('varchar', { default: '', comment: '创建人地址' })
  creator_address;

  @Column('varchar', { default: '', comment: '创建哈希' })
  create_transaction_hash;

  @OneToOne(() => PoolNftEntity, (nft: PoolNftEntity) => nft.pool)
  nft: PoolNftEntity;
}
