import { Sequelize, SequelizeOptions } from 'sequelize-typescript'
import { User, Breed } from '@/models'
import databaseConfig from '../config/database'

const models = [User, Breed]

class Database {
  connection: Sequelize
  constructor () {
    this.init()
  }

  init (): void {
    this.connection = new Sequelize(databaseConfig as SequelizeOptions)
    this.connection.addModels(models)
  }
}

export default new Database()
