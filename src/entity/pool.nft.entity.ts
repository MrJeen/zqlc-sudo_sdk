import { BaseEntity } from './base.entity';
import { Column, Entity, Index, JoinColumn, ManyToOne } from 'typeorm';
import { PoolEntity } from './pool.entity';

@Entity('pool_nfts')
@Index(['pool_id'], { unique: true })
@Index(['token_address'])
export class PoolNftEntity extends BaseEntity {
  @Column('bigint', { default: 0, comment: '池子ID' })
  pool_id;

  @Column('varchar', { default: '', comment: '系列地址' })
  token_address;

  @Column('varchar', { default: '', comment: 'nft id' })
  token_id;

  @ManyToOne(() => PoolEntity)
  @JoinColumn({ name: 'pool_id' })
  pool: PoolEntity;
}
