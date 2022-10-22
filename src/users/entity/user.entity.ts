import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';
import { Roles } from '../../utils';

@Entity()
export class UserEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  telegramId: number;

  @Column()
  firstName: string;

  @Column()
  lastName: string;

  @Column()
  role: Roles;
}
