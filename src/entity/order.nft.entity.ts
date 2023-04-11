import { BaseEntity } from './base.entity';
import { Column, Entity, Index, JoinColumn, ManyToOne } from 'typeorm';
import { OrderEntity } from './order.entity';

@Entity('order_nfts')
@Index(['order_id', 'token_id'], { unique: true })
@Index(['token_address'])
export class OrderNftEntity extends BaseEntity {
  @Column('bigint', { default: 0, comment: '订单ID' })
  order_id: number;

  @Column('varchar', { default: '', comment: '系列地址' })
  token_address: string;

  @Column('varchar', { default: '', comment: 'nft id' })
  token_id: string;

  @ManyToOne(() => OrderEntity, { createForeignKeyConstraints: false })
  @JoinColumn({ name: 'order_id' })
  order: OrderEntity;
}
