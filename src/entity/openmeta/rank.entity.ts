import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('ranks')
export class RankEntity {
  @PrimaryGeneratedColumn({ comment: 'ID' })
  id: number;

  @Column()
  stats_date: Date;

  @Column()
  chain_id: number;

  @Column()
  collection_id: number;

  @Column()
  owner_count: number;

  @Column()
  nft_count: number;
}
