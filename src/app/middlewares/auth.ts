import { Request, Response, NextFunction } from 'express'
import jwt from 'jsonwebtoken'
import authConfig from '../../config/auth'

type Payload = {
  id: number
}

export const authMiddleware = async (req: Request, res: Response, next: NextFunction): Promise<Response> => {
  const authHeader = req.headers.authorization
  if (!authHeader) {
    return res.status(401).json({ error: 'Token not provided' })
  }
  const [, token] = authHeader.split(' ')
  try {
    const decoded = jwt.verify(token, authConfig.secret) as Payload
    req.userId = decoded.id
    next()
  } catch (err) {
    return res.status(401).json({ error: 'Invalid token' })
  }
}
