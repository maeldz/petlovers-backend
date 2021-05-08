import { Table, Column, Model, ForeignKey, BelongsTo } from 'sequelize-typescript'
import { Breed, User, File } from '@/models'

@Table
export class Dog extends Model {
  @ForeignKey(() => User)
  @Column
  owner_id: number

  @BelongsTo(() => File, 'image_id')
  image: File

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
