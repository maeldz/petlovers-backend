import express from 'express'
import cors from 'cors'
import { resolve } from 'path'
import routes from './routes'
import './database'

class App {
  public server: express.Application

  constructor () {
    this.server = express()
    this.middlewares()
    this.routes()
  }

  middlewares (): void {
    this.server.use(cors())
    this.server.use(express.json())
    this.server.use(
      '/files',
      express.static(resolve(__dirname, '..', 'tmp', 'uploads'))
    )
  }

  routes (): void {
    this.server.use(routes)
  }
}

export default new App().server
