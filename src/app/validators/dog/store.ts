import * as Yup from 'yup'
import { Request, Response, NextFunction } from 'express'

export const dogStoreValidator = async (req: Request, res: Response, next: NextFunction): Promise<Response> => {
  try {
    const schema = Yup.object().shape({
      name: Yup.string().required(),
      breed: Yup.string().required(),
      dewormed: Yup.boolean().required(),
      neutered: Yup.boolean().required()
    })

    await schema.validate(req.body, { abortEarly: false })

    next()
  } catch (err) {
    return res
      .status(400)
      .json({ error: 'Validation fails', messages: err.inner })
  }
}
