import { BaseEntity } from './base.entity';
import { Column, Entity, Index, JoinColumn, OneToOne } from 'typeorm';
import { OrderEntity } from './order.entity';

@Entity('order_nfts')
@Index(['order_id'], { unique: true })
export class OrderNftEntity extends BaseEntity {
  @Column('bigint', { default: 0, comment: '订单ID' })
  order_id;

  @Column('jsonb', { default: [], comment: 'nft明细' })
  nft_list;

  @OneToOne(() => OrderEntity)
  @JoinColumn({ name: 'order_id' })
  order: OrderEntity;
}
