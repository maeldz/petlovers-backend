import { Router } from 'express'
import { UserController, SessionController, DogController, FileController } from '@/controllers'
import { userCreateValidator, userUpdateValidator, sessionCreateValidator, dogCreateValidator, dogFindAllValidator } from '@/validators'
import { authMiddleware, uploadMiddleware } from '@/middlewares'

const routes = Router()

routes.post('/sessions', sessionCreateValidator, new SessionController().store)
routes.post('/users', userCreateValidator, new UserController().store)
routes.use(authMiddleware)
routes.put('/users', userUpdateValidator, new UserController().update)
routes.post('/dogs', dogCreateValidator, new DogController().store)
routes.get('/dogs', dogFindAllValidator, new DogController().index)
routes.post('/files', uploadMiddleware('file'), new FileController().store)

export default routes
