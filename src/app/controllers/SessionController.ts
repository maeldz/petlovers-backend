import { Request, Response } from 'express'
import jwt from 'jsonwebtoken'
import { User } from '@/models'
import authConfig from '../../config/auth'

export class SessionController {
  async store (req: Request, res: Response): Promise<Response> {
    const { email, password } = req.body

    const user = await User.findOne({
      where: { email }
    })

    if (!user) {
      return res.status(401).json({ error: 'User not found' })
    }

    if (!(await user.checkPassword(password))) {
      return res.status(401).json({ error: 'Password does not match' })
    }

    const { id, name } = user

    return res.json({
      user: {
        id,
        name,
        email
      },
      token: jwt.sign({ id }, authConfig.secret, {
        expiresIn: authConfig.expires
      })
    })
  }
}
