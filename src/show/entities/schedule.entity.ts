import {
  Column,
  CreateDateColumn,
  Entity,
  ManyToOne,
  OneToOne,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';
import { Show } from './show.entity';
import { Book } from 'src/book/entities/book.entity';
import { Seat } from './seat.entity';

@Entity('schedules')
export class Schedule {
  @PrimaryGeneratedColumn({ unsigned: true })
  id: number;

  @Column({ unsigned: true })
  showId: number;

  @Column({ type: 'date' })
  date: Date;

  @Column({ type: 'time' })
  time: string;

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;

  @ManyToOne((type) => Show, (show) => show.schedule)
  show: Show;

  @ManyToOne((type) => Book, { onDelete: true })
  book: Book;

  @OneToOne((type) => Seat, (seat) => seat.schedule)
  seat: Seat;
}
