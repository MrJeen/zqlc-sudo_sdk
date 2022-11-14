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
  ETH = 1,
  BSC = 56,
  POLYGON = 137,
  GOERLI = 5,
  ZKSYNC = 280,
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
}

// 排序
export enum ORDER_DIRECTION {
  DESC = 'DESC',
  ASC = 'ASC',
}

export class BaseEntity {
  @PrimaryGeneratedColumn({ comment: 'ID' })
  id: number;

  @CreateDateColumn({ comment: '创建时间' })
  created_at: Date;

  @UpdateDateColumn({ comment: '更新时间' })
  updated_at: Date;

  @DeleteDateColumn({ comment: '删除时间' })
  deleted_at: Date;
}
