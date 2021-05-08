import { Request, Response } from 'express'
import { Dog, Breed, File } from '@/models'

export class DogController {
  async index (req: Request, res: Response): Promise<Response> {
    const { breed, dewormed, neutered } = req.query
    const filter = req.query?.myDogs ? { owner_id: req.userId } : { breed, dewormed, neutered }
    const dogs = await Dog.findAll({
      where: filter,
      attributes: ['id', 'owner_id', 'name', 'birthday', 'breed', 'dewormed', 'neutered'],
      include: [
        {
          model: File,
          as: 'image',
          attributes: ['id', 'path', 'url']
        }
      ]
    })

    return res.json(dogs)
  }

  async store (req: Request, res: Response): Promise<Response> {
    const { breed } = req.body
    await Breed.findOrCreate({ where: { name: breed } })
    const {
      id,
      name,
      owner_id: ownerId,
      birthday,
      dewormed,
      neutered
    } = await Dog.create({ ...req.body, owner_id: req.userId })

    return res.json({ id, ownerId, breed, name, birthday, dewormed, neutered })
  }
}
