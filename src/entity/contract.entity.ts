import { Column, Entity, Index, OneToMany } from 'typeorm';
import { BaseEntity, CONTRACT_STATUS } from './base.entity';
import { PoolEntity } from './pool.entity';

@Entity('contracts')
@Index(['chain_id', 'token_address'], { unique: true })
export class ContractEntity extends BaseEntity {
  @Column('int', { default: 0, comment: '区块链id' })
  chain_id: number;

  @Column('varchar', { default: '', comment: '系列地址' })
  token_address: string;

  @Column('varchar', { default: '', comment: '系列名称' })
  name: string;

  @Column('varchar', { default: '', comment: '系列类型（ERC721、ERC1155）' })
  contract_type: string;

  @Column('varchar', { default: '', comment: '系列创建者' })
  creator: string;

  @Column('int', { default: 0, comment: '列出数量（卖池中的NFT数量）' })
  list_volume: number;

  @Column('int', { default: 0, comment: '池子数量（所有流动池数量）' })
  pool_statistics: number;

  @Column('decimal', {
    precision: 56,
    scale: 18,
    default: 0,
    comment: '地板价(卖池的最低价)',
  })
  floor_price: number | string;

  @Column('decimal', {
    precision: 56,
    scale: 18,
    default: 0,
    comment: '最高报价（买池的最高价）',
  })
  top_price: number | string;

  @Column('decimal', {
    precision: 56,
    scale: 18,
    default: 0,
    comment: '报价TVL（所有买盘流动性，即价值总和）',
  })
  quote_tvl: number | string;

  @Column('decimal', {
    precision: 56,
    scale: 18,
    default: 0,
    comment: '总成交额',
  })
  total_amount: number | string;

  @Column('decimal', {
    precision: 56,
    scale: 18,
    default: 0,
    comment: '24小时成交额',
  })
  daily_amount: number | string;

  @Column('decimal', {
    precision: 56,
    scale: 18,
    default: 0,
    comment: '7天成交额',
  })
  weekly_amount: number | string;

  @Column('decimal', {
    precision: 56,
    scale: 18,
    default: 0,
    comment: '30天成交额',
  })
  monthly_amount: number | string;

  @Column('decimal', {
    precision: 56,
    scale: 18,
    default: 0,
    comment: '24小时交易量涨跌幅',
  })
  daily_range: number | string;

  @Column('decimal', {
    precision: 56,
    scale: 18,
    default: 0,
    comment: '7天交易量涨跌幅',
  })
  weekly_range: number | string;

  @Column('decimal', {
    precision: 56,
    scale: 18,
    default: 0,
    comment: '30天交易量涨跌幅',
  })
  monthly_range: number | string;

  @Column('decimal', {
    precision: 56,
    scale: 18,
    default: 0,
    comment: '24小时地板价涨跌幅',
  })
  daily_price_range: number | string;

  @Column('decimal', {
    precision: 56,
    scale: 18,
    default: 0,
    comment: '7天地板价涨跌幅',
  })
  weekly_price_range: number | string;

  @Column('decimal', {
    precision: 56,
    scale: 18,
    default: 0,
    comment: '30天地板价涨跌幅',
  })
  monthly_price_range: number | string;

  @Column('int', {
    default: CONTRACT_STATUS.UPPER,
    comment: '状态（已上架:20 已下架:30 已隐藏:90）',
  })
  status: number;

  @Column('int', { default: 0, comment: '是否首页展示（是:1 否:0）' })
  show_on_home_page: number;

  @OneToMany(() => PoolEntity, (pool: PoolEntity) => pool.contract)
  pools: PoolEntity[];
}
