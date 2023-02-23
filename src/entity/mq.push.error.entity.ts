import { Column, Entity } from 'typeorm';
import { BaseEntity } from './base.entity';

@Entity('mq_push_error_logs')
export class MQPushErrorLogs extends BaseEntity {
  @Column('varchar', { default: '', comment: '交换机' })
  exchange;

  @Column('varchar', { default: '', comment: '路由key' })
  routing_key;

  @Column('json', { default: {}, comment: '推送数据' })
  data;

  @Column('varchar', { default: '', comment: '错误原因' })
  error_msg;

  @Column('smallint', {
    default: 0,
    comment: '处理状态（0-未处理 20-处理成功）',
  })
  status;
}

export enum MQ_HANDLE_STATUS {
  DEFAULT = 0,
  SUCCESS = 20,
}
