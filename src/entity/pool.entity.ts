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
@Index(['token_address'])
export class PoolEntity extends BaseEntity {
  @Column('int', { default: 0, comment: '区块链id' })
  chain_id;

  @Column('varchar', { default: '', comment: '池子地址' })
  pool_address;

  @Column('varchar', { default: '', comment: '拥有者地址' })
  owner_address;

  @Column('varchar', { default: '', comment: '系列地址' })
  token_address;

  @Column('varchar', { default: '', comment: '曲线地址（线性：，指数：）' })
  curve_address;

  @Column('varchar', { default: '', comment: '收款方地址' })
  recipient_address;

  @Column('varchar', { default: '', comment: '币种地址' })
  currency;

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
    comment: '初始价格（当前价格）',
  })
  initial_price;

  @Column('decimal', {
    precision: 36,
    scale: 20,
    default: 0,
    comment: '池子里eth数量',
  })
  balance;

  @Column('decimal', {
    precision: 36,
    scale: 20,
    default: 0,
    comment: '池子的交易量',
  })
  total_amount;

  @Column('decimal', {
    precision: 36,
    scale: 20,
    default: 0,
    comment: '池子最近24小时的交易量',
  })
  daily_amount;

  @Column('int', { default: 0, comment: 'nft数量' })
  nft_count;

  @Column('timestamp', { default: () => 'NOW()', comment: '池子创建时间' })
  create_time;

  @Column('int', { default: 0, comment: '池子创建时的区块' })
  create_block_number;

  @Column('varchar', { default: '', comment: '创建人地址' })
  creator_address;

  @Column('varchar', { default: '', comment: '创建哈希' })
  create_transaction_hash;

  @OneToMany(() => PoolNftEntity, (nft: PoolNftEntity) => nft.pool)
  nfts: PoolNftEntity[];

  @ManyToOne(() => ContractEntity)
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
