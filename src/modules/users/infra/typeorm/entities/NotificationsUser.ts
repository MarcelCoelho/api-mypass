import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  UpdateDateColumn,
} from 'typeorm';

import User from '@modules/users/infra/typeorm/entities/User';

@Entity('users_notifications')
class UserNotifications {
  @PrimaryGeneratedColumn('uuid')
  schudeling_id: string;

  @Column()
  user_id: string;

  @Column()
  active: number;

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;
}

export default UserNotifications;
