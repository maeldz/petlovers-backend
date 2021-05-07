import { Table, Column, Model, BeforeSave } from 'sequelize-typescript'
import bcrypt from 'bcrypt'

@Table
export class User extends Model {
  @Column
  name: string

  @Column
  email: string

  @Column
  password_hash: string

  @BeforeSave
  static async hashPassword (user: any): Promise<void> {
    if (user.password) {
      user.password_hash = await bcrypt.hash(user.password, 8)
    }
  }

  async checkPassword (password: string): Promise<boolean> {
    return await bcrypt.compare(password, this.password_hash)
  }
}
