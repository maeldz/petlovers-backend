import { Table, Column, Model, DataType } from 'sequelize-typescript'

@Table
export class File extends Model {
  @Column
  name: number

  @Column
  path: string

  @Column(DataType.VIRTUAL)
  get url (): string {
    return `http://localhost:3333/files/${this.path}`
  }
}
