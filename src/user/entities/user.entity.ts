import {
  IsBoolean,
  IsEmail,
  IsNotEmpty,
  IsNumber,
  IsStrongPassword,
} from 'class-validator';
import { Book } from 'src/book/entities/book.entity';
import {
  Column,
  CreateDateColumn,
  Entity,
  OneToMany,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity('users')
export class User {
  @PrimaryGeneratedColumn({ unsigned: true })
  id: number;

  @IsNotEmpty({ message: '이메일을 입력해 주세요.' })
  //여기 확인: 그냥 메시지 쓰면 안되는데 앞에 객체 추가하면 됨 ????
  @IsEmail({}, { message: '이메일 형식에 맞지 않습니다.' })
  @Column({ unique: true })
  email: string;

  @IsNotEmpty({ message: '비밀번호를 입력해 주세요.' })
  @IsStrongPassword()
  @Column()
  password: string;

  @IsNotEmpty({ message: '닉네임을 입력해 주세요.' })
  @Column()
  nickname: string;

  @IsNumber()
  @Column({ unsigned: true })
  points: number;

  @IsBoolean()
  @Column()
  isAdmin: boolean;

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;

  @OneToMany((type) => Book, (book) => book.user)
  books: Book[];
}
