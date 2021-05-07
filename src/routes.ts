import { Router } from 'express'
import { UserController } from '@/controllers'
import { userStoreValidator } from '@/validators'

const routes = Router()

routes.post('/users', userStoreValidator, new UserController().store)

export default routes
