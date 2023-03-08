import { BaseEntity } from './base.entity';
import { Column, Entity, Index } from 'typeorm';

/**
 * 管理后台收到配置的挖矿系列表
 */
@Entity('sm_manual_contracts')
@Index(['chain_id', 'token_address'])
export class SmManualContractEntity extends BaseEntity {
  @Column('int', { default: 0, comment: '区块链id' })
  chain_id;

  @Column('varchar', { default: '', comment: '系列地址' })
  token_address;

  @Column('smallint', { default: 0, comment: '权重（满值100）' })
  weight;

  @Column('timestamp', { default: () => 'NOW()', comment: '挖矿开始时间' })
  start_time;

  @Column('timestamp', { default: () => 'NOW()', comment: '挖矿结束时间' })
  end_time;
}
