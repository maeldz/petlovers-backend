import { Router } from 'express'
import { UserController, SessionController, DogController, FileController } from '@/controllers'
import { userCreateValidator, userUpdateValidator, sessionCreateValidator, dogCreateValidator, dogFindAllValidator } from '@/validators'
import { authMiddleware, uploadMiddleware } from '@/middlewares'

const routes = Router()

routes.post('/sessions', sessionCreateValidator, new SessionController().store)

routes.post('/users', userCreateValidator, new UserController().store)
routes.put('/users', authMiddleware, userUpdateValidator, new UserController().update)

routes.post('/dogs', authMiddleware, dogCreateValidator, new DogController().store)
routes.get('/dogs', authMiddleware, dogFindAllValidator, new DogController().index)

routes.post('/files', authMiddleware, uploadMiddleware('file'), new FileController().store)

export default routes
