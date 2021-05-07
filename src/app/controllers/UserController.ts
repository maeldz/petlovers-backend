import { Request, Response } from 'express'
import { User } from '@/models'

export class UserController {
  async store (req: Request, res: Response): Promise<Response> {
    const userExists = await User.findOne({
      where: {
        email: req.body.email
      }
    })

    if (userExists) {
      return res.status(400).json({ error: 'User already exists' })
    }

    const { id, name, email } = await User.create(req.body)

    return res.json({ id, name, email })
  }
}
