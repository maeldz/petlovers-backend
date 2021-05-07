import { Router } from 'express'
import { UserController, SessionController } from '@/controllers'
import { userStoreValidator, sessionStoreValidator } from '@/validators'
const routes = Router()

routes.post('/users', userStoreValidator, new UserController().store)
routes.post('/sessions', sessionStoreValidator, new SessionController().store)

export default routes
