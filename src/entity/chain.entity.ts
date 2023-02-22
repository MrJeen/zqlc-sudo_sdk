import { BaseEntity } from './base.entity';
import { Column, Entity, Index } from 'typeorm';

@Entity('chains')
@Index(['chain_id'], { unique: true })
export class ChainEntity extends BaseEntity {
  @Column('int', { default: 0, comment: '区块链id' })
  chain_id;

  @Column('varchar', { default: '', comment: '区块链名称' })
  name;

  @Column('int', { default: 0, comment: '最新区块' })
  latest_block;

  @Column('int', { default: 0, comment: '交易挖矿最新区块' })
  swap_mining_block;
}
