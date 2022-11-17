import { BaseEntity } from './base.entity';
import { Column, Entity, Index, JoinColumn, OneToOne } from 'typeorm';
import { PoolEntity } from './pool.entity';

@Entity('pool_nfts')
@Index(['pool_id'], { unique: true })
export class PoolNftEntity extends BaseEntity {
  @Column('bigint', { default: 0, comment: '池子ID' })
  pool_id;

  @Column('jsonb', { default: [], comment: 'nft明细' })
  nft_list;

  @OneToOne(() => PoolEntity)
  @JoinColumn({ name: 'pool_id' })
  pool: PoolEntity;
}
