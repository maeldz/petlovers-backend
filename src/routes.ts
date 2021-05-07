import { Router } from 'express'
import { UserController, SessionController, DogController } from '@/controllers'
import { userStoreValidator, userUpdateValidator, sessionStoreValidator, dogStoreValidator } from '@/validators'
import authMiddleware from '@/middlewares/auth'

const routes = Router()

routes.post('/sessions', sessionStoreValidator, new SessionController().store)

routes.post('/users', userStoreValidator, new UserController().store)
routes.put('/users', authMiddleware, userUpdateValidator, new UserController().update)

routes.post('/dogs', authMiddleware, dogStoreValidator, new DogController().store)

export default routes
