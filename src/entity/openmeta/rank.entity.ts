import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('rank_trends')
export class RankEntity {
  @PrimaryGeneratedColumn({ comment: 'ID' })
  id: number;

  @Column()
  stats_date: Date;

  @Column()
  chain_id: number;

  @Column()
  contract_address: number;

  @Column()
  owners: number;

  @Column()
  items: number;
}
