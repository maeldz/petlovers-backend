import multer from 'multer'
import multerConfig from '../../config/multer'

export const uploadMiddleware = (field: string): any => multer(multerConfig).single(field)
