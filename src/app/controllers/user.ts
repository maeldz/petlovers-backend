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

  async update (req: Request, res: Response): Promise<Response> {
    const { email, oldPassword, name } = req.body
    const user = await User.findByPk(req.userId)

    if (email !== user.email) {
      const userExists = await User.findOne({ where: { email } })
      if (userExists) {
        return res.status(400).json({ error: 'User already exists' })
      }
    }

    if (oldPassword && !(await user.checkPassword(oldPassword))) {
      return res.status(401).json({ error: 'Password does not match' })
    }

    await user.update(req.body)
    return res.json({ id: user.id, name, email })
  }
}
