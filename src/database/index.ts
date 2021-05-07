import { Sequelize, SequelizeOptions } from 'sequelize-typescript'
import { User, Dog, Breed, File } from '@/models'
import databaseConfig from '../config/database'

const models = [User, Dog, Breed, File]

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
