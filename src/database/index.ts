import { Sequelize, SequelizeOptions } from 'sequelize-typescript'
import { User, Dog, Breed } from '@/models'
import databaseConfig from '../config/database'

const models = [User, Dog, Breed]

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
