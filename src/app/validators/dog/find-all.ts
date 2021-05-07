import * as Yup from 'yup'
import { Request, Response, NextFunction } from 'express'

export const dogFindAllValidator = async (req: Request, res: Response, next: NextFunction): Promise<Response> => {
  const myDogs = req.query?.myDogs
  try {
    const schema = Yup.object().shape({
      myDogs: Yup.boolean(),
      breed: myDogs ? Yup.string() : Yup.string().required(),
      dewormed: myDogs ? Yup.boolean() : Yup.boolean().required(),
      neutered: myDogs ? Yup.boolean() : Yup.boolean().required()
    })

    await schema.validate(req.query, { abortEarly: false })

    next()
  } catch (err) {
    return res
      .status(400)
      .json({ error: 'Validation fails', messages: err.inner })
  }
}
