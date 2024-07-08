import { Show } from 'src/show/entities/show.entity';
import { User } from 'src/user/entities/user.entity';
import {
  Column,
  CreateDateColumn,
  Entity,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity({
  name: 'tickets',
})
export class Ticket {
  @PrimaryGeneratedColumn()
  id: number;

  @ManyToOne(() => User)
  @Column()
  userId: number;

  @ManyToOne(() => Show)
  @Column()
  showId: number;

  @Column({ type: 'varchar' })
  date: string;

  @Column({ type: 'int', nullable: true })
  totalPrice: number;

  @Column({ type: 'int', nullable: false })
  count: number;

  @CreateDateColumn({ type: 'timestamp' })
  createdAt: Date;
}
