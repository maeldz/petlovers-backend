import { Request, Response } from 'express'
import { User } from '@/models'

export class UserController {
  async store (req: Request, res: Response): Promise<Response> {
    const user = await User.create(req.body)
    return res.json(user)
  }
}
