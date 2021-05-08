import { Table, Column, Model, BeforeSave, BelongsTo, DataType } from 'sequelize-typescript'
import bcrypt from 'bcrypt'
import { File } from '@/models'

@Table
export class User extends Model {
  @BelongsTo(() => File, 'avatar_id')
  avatar: File

  @Column
  name: string

  @Column
  email: string

  @Column(DataType.VIRTUAL)
  password: string

  @Column
  password_hash: string

  @BeforeSave
  static async hashPassword (user: User): Promise<void> {
    if (user.password) {
      user.password_hash = await bcrypt.hash(user.password, 8)
    }
  }

  async checkPassword (password: string): Promise<boolean> {
    return await bcrypt.compare(password, this.password_hash)
  }
}
