import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, JoinColumn } from 'typeorm'
import { Situations } from './Situations'

@Entity('users')
export class Users {
  @PrimaryGeneratedColumn()
  id!: number

  @Column()
  name!: string

  @Column({ unique: true })
  email!: string

  @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
  created_at!: Date

  @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
  updated_at!: Date

  @ManyToOne(() => Situations, (situation) => situation.users)
  @JoinColumn({ name: 'situation_id' })
  situation!: Situations
}
