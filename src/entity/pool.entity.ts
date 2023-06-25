import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  OneToMany,
} from 'typeorm';
import { BaseEntity } from './base.entity';
import { PoolNftEntity } from './pool.nft.entity';
import { ContractEntity } from './contract.entity';

@Entity('pools')
@Index(['chain_id', 'pool_address'], { unique: true })
@Index(['chain_id', 'token_address'])
@Index(['owner_address'])
export class PoolEntity extends BaseEntity {
  @Column('int', { default: 0, comment: '区块链id' })
  chain_id: number;

  @Column('varchar', { default: '', comment: '池子地址' })
  pool_address: string;

  @Column('varchar', { default: '', comment: '拥有者地址' })
  owner_address: string;

  @Column('varchar', { default: '', comment: '系列地址' })
  token_address: string;

  @Column('varchar', { default: '', comment: '曲线地址（线性：，指数：）' })
  curve_address: string;

  @Column('varchar', { default: '', comment: '收款方地址' })
  recipient_address: string;

  @Column('varchar', { default: '', comment: '币种地址' })
  currency: string;

  @Column('int2', {
    default: 0,
    comment: '池子类型（0: 买池，1: 卖池，2:流动池）',
  })
  type: number;

  @Column('decimal', {
    precision: 56,
    scale: 18,
    default: 0,
    comment: '调整预设增量',
  })
  delta: number | string;

  @Column('decimal', {
    precision: 56,
    scale: 18,
    default: 0,
    comment: '增量',
  })
  curve_increment: number | string;

  @Column('decimal', {
    precision: 56,
    scale: 18,
    default: 0,
    comment: '手续费',
  })
  fee: number | string;

  @Column('decimal', {
    precision: 56,
    scale: 18,
    default: 0,
    comment: '初始价格（当前价格）',
  })
  initial_price: number | string;

  @Column('decimal', {
    precision: 56,
    scale: 18,
    default: 0,
    comment: '用户购买价（卖池和双边池）',
  })
  buy_price: number | string;

  @Column('decimal', {
    precision: 56,
    scale: 18,
    default: 0,
    comment: '用户售价（买池和双边池）',
  })
  sell_price: number | string;

  @Column('decimal', {
    precision: 56,
    scale: 18,
    default: 0,
    comment: '池子里eth数量',
  })
  balance: number | string;

  @Column('decimal', {
    precision: 56,
    scale: 18,
    default: 0,
    comment: '池子预算',
  })
  budget: number | string;

  @Column('decimal', {
    precision: 56,
    scale: 18,
    default: 0,
    comment: '用户资金池余额',
  })
  balances: number | string;

  @Column('decimal', {
    precision: 56,
    scale: 18,
    default: 0,
    comment: '池子的交易量',
  })
  total_amount: number | string;

  @Column('decimal', {
    precision: 56,
    scale: 18,
    default: 0,
    comment: '池子最近24小时的交易量',
  })
  daily_amount: number | string;

  @Column('int', { default: 0, comment: 'nft数量' })
  nft_count: number;

  @Column('timestamp', { default: () => 'NOW()', comment: '池子创建时间' })
  create_time: Date;

  @Column('int', { default: 0, comment: '池子创建时的区块' })
  create_block_number: number;

  @Column('varchar', { default: '', comment: '创建人地址' })
  creator_address: string;

  @Column('varchar', { default: '', comment: '创建哈希' })
  create_transaction_hash: string;

  @OneToMany(() => PoolNftEntity, (nft: PoolNftEntity) => nft.pool)
  nfts: PoolNftEntity[];

  @ManyToOne(() => ContractEntity, { createForeignKeyConstraints: false })
  @JoinColumn([
    {
      name: 'chain_id',
      referencedColumnName: 'chain_id',
    },
    {
      name: 'token_address',
      referencedColumnName: 'token_address',
    },
  ])
  contract: ContractEntity;
}
