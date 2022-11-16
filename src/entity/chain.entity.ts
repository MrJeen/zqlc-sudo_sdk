import { BaseEntity } from './base.entity';
import { Column, Entity } from 'typeorm';

@Entity('chains')
export class PoolNftEntity extends BaseEntity {
  @Column('int', { default: 0, comment: '区块链id' })
  chain_id;

  @Column('varchar', { default: '', comment: '区块链名称' })
  name;

  @Column('int', { default: 0, comment: '最新区块' })
  latest_block;
}
