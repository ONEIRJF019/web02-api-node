import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm'
import { Users } from './Users'

@Entity('situations')
export class Situations {
  @PrimaryGeneratedColumn()
  id!: number

  @Column({ unique: true })
  name_situation!: string

  @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
  created_at!: Date

  @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
  updated_at!: Date

  @OneToMany(() => Users, (users) => users.situation)
  users!: Users[]
}
