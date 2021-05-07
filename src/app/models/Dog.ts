import { Table, Column, Model, ForeignKey } from 'sequelize-typescript'
import { Breed } from '@/models'

@Table
export class Dog extends Model {
  @Column
  name: string

  @ForeignKey(() => Breed)
  @Column
  breed: string

  @Column
  dewormed: boolean

  @Column
  neutered: boolean
}
