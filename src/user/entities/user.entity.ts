import { Column, Entity, Index, PrimaryGeneratedColumn } from 'typeorm';

import { Role } from '../types/userRole.type';

@Index('email', ['email'], { unique: true })
@Entity({
  name: 'users',
})
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'varchar', unique: true, nullable: false })
  email: string;

  @Column({ type: 'varchar', select: false, nullable: false })
  password: string;

  @Column({ type: 'enum', enum: Role, default: Role.User })
  role: Role;

  @Column({ type: 'varchar' })
  nickName: string;

  @Column({ type: 'varchar', default: 1000000 })
  wallet: number;

  @Column({ type: 'varchar', nullable: true })
  introduce: string;
}
