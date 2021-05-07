import { Router } from 'express'
import { UserController, SessionController } from '@/controllers'
import { userStoreValidator, userUpdateValidator, sessionStoreValidator } from '@/validators'
import authMiddleware from '@/middlewares/auth'

const routes = Router()

routes.post('/users', userStoreValidator, new UserController().store)
routes.put('/users', authMiddleware, userUpdateValidator, new UserController().update)

routes.post('/sessions', sessionStoreValidator, new SessionController().store)

export default routes
