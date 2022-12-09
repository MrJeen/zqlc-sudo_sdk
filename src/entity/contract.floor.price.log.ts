import { BaseEntity } from './base.entity';
import { Column, Entity, Index } from 'typeorm';

@Entity('contract_floor_price_log')
@Index(['chain_id', 'token_address'])
export class ContractFloorPriceLog extends BaseEntity {
  @Column('int', { default: 0, comment: '区块链id' })
  chain_id;

  @Column('varchar', { default: '', comment: '系列地址' })
  token_address;

  @Column('decimal', {
    precision: 36,
    scale: 20,
    default: 0,
    comment: '地板价(卖池的最低价)',
  })
  floor_price;
}
