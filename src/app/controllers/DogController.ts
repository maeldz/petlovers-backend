import { Request, Response } from 'express'
import { Dog, Breed } from '@/models'

export class DogController {
  async store (req: Request, res: Response): Promise<Response> {
    const { breed } = req.body
    await Breed.findOrCreate({ where: { name: breed } })
    const {
      id,
      name,
      dewormed,
      neutered
    } = await Dog.create(req.body)

    return res.json({ id, breed, name, dewormed, neutered })
  }
}
