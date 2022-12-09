import { Column, Entity, Index } from 'typeorm';
import { BaseEntity } from './base.entity';

/**
 * 所有买池（包括流动池）的余额变化
 */
@Entity('pool_balance_log')
@Index(['offer_date'])
export class PoolBalanceLogEntity extends BaseEntity {
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
