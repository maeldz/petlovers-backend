import multer from 'multer'
import multerConfig from '../../config/multer'

export const upload = (field: string): any => multer(multerConfig).single(field)
