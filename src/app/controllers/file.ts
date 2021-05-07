import { Request, Response } from 'express'
import { File } from '@/models'

export class FileController {
  async store (req: Request, res: Response): Promise<Response> {
    const { originalname: name, filename: path } = req.file
    const file = await File.create({ name, path })

    return res.json(file)
  }
}
