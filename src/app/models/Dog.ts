import { Table, Column, Model, ForeignKey } from 'sequelize-typescript'
import { Breed, User } from '@/models'

@Table
export class Dog extends Model {
  @ForeignKey(() => User)
  owner_id: number

  @Column
  name: string

  @Column
  birthday: Date

  @ForeignKey(() => Breed)
  @Column
  breed: string

  @Column
  dewormed: boolean

  @Column
  neutered: boolean
}
