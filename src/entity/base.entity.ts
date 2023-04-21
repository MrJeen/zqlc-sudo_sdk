import { BSC_NETWORK, GOERLI_NETWORK } from '../config/constant';
import {
  CreateDateColumn,
  DeleteDateColumn,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

export enum STATUS {
  FALSE,
  TRUE,
}

export enum CONTRACT_STATUS {
  UPPER = 20,
  LOWER = 30,
  HIDDEN = 90,
}

export enum CHAIN {
  BSC = BSC_NETWORK.chainId,
  GOERLI = GOERLI_NETWORK.chainId,
}

export enum CONTRACT_TYPE {
  ERC721 = 'ERC721',
  ERC1155 = 'ERC1155',
}

// 排行榜排序字段
export enum ORDER_COLUMN {
  'LIST_VOLUME' = 'list_volume',
  'FLOOR_PRICE' = 'floor_price',
  'TOP_PRICE' = 'top_price',
  'QUOTE_TVL' = 'quote_tvl',
  'DAILY_AMOUNT' = 'daily_amount',
  'DAILY_RANGE' = 'daily_range',
  'WEEKLY_AMOUNT' = 'weekly_amount',
  'WEEKLY_RANGE' = 'weekly_range',
  'MONTHLY_AMOUNT' = 'monthly_amount',
  'MONTHLY_RANGE' = 'monthly_range',
}

// 排序
export enum ORDER_DIRECTION {
  DESC = 'DESC',
  ASC = 'ASC',
}

// 池子类型
export enum POOL_TYPE {
  BUY,
  SELL,
  DOUBLE,
}

// 订单类型
export enum ORDER_TYPE {
  BUY = 1,
  SELL,
}

// openmeta数据库
export const DATABASE_OPENMETA_NAME = 'openmeta';

export class BaseEntity {
  @PrimaryGeneratedColumn({ comment: 'ID', type: 'bigint' })
  id: number;

  @CreateDateColumn({ comment: '创建时间' })
  created_at: Date;

  @UpdateDateColumn({ comment: '更新时间' })
  updated_at: Date;

  @DeleteDateColumn({ comment: '删除时间' })
  deleted_at: Date;
}

export class OpenMetaBaseEntity {
  @PrimaryGeneratedColumn({ comment: 'ID' })
  id: number;

  @CreateDateColumn({ comment: '创建时间' })
  created_at: Date;

  @UpdateDateColumn({ comment: '更新时间' })
  updated_at: Date;
}
