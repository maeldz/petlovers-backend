import { Table, Column, Model } from 'sequelize-typescript'

@Table
export class Breed extends Model {
  @Column
  name: string
}
