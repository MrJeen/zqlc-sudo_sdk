import { Column, Entity, Index } from 'typeorm';
import { BaseEntity } from './base.entity';

/**
 * 所有买池（包括流动池）的余额变化
 */
@Entity('pool_balance_log')
@Index(['chain_id, offer_date'], { unique: true })
export class PoolBalanceLogEntity extends BaseEntity {
  @Column('int', { default: 0, comment: '区块链id' })
  chain_id;

  @Column('varchar', { default: '', comment: '日期' })
  offer_date;

  @Column('decimal', {
    precision: 36,
    scale: 20,
    default: 0,
    comment: '所有买池（包括流动池）的累计余额',
  })
  offer_tvl;
}
