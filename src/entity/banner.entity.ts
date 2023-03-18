import { Column, Entity } from 'typeorm';
import { BaseEntity } from './base.entity';

@Entity('banners')
export class BannerEntity extends BaseEntity {
  @Column('int', { default: 0, comment: '区块链id' })
  chain_id;

  @Column('varchar', {
    default: '',
    comment: '名称',
  })
  title;

  @Column('smallint', {
    default: 0,
    comment: '状态（0：待发布，1：未生效，2：已上架， 3：已下架）',
  })
  status;

  @Column('int', {
    default: 0,
    comment: '排序',
  })
  sort;

  @Column('timestamp', {
    default: () => 'NOW()',
    comment: '开始时间',
  })
  start_time;

  @Column('timestamp', {
    default: () => 'NOW()',
    comment: '结束时间',
  })
  end_time;

  @Column('varchar', {
    default: '',
    comment: '英文图片',
  })
  img_en;

  @Column('varchar', {
    default: '',
    comment: '英文图片链接',
  })
  link_en;

  @Column('varchar', {
    default: '',
    comment: '中文图片',
  })
  img_zh;

  @Column('varchar', {
    default: '',
    comment: '中文图片链接',
  })
  link_zh;
}

export enum BANNER_STATUS {
  DEFAULT, // 待发布
  INEFFECTIVE, // 未生效
  ON, // 已上架
  OFF, // 已下架
}
