import { Router } from 'express'
import { UserController, SessionController, DogController } from '@/controllers'
import { userCreateValidator, userUpdateValidator, sessionCreateValidator, dogCreateValidator } from '@/validators'
import authMiddleware from '@/middlewares/auth'

const routes = Router()

routes.post('/sessions', sessionCreateValidator, new SessionController().store)

routes.post('/users', userCreateValidator, new UserController().store)
routes.put('/users', authMiddleware, userUpdateValidator, new UserController().update)

routes.post('/dogs', authMiddleware, dogCreateValidator, new DogController().store)

export default routes
