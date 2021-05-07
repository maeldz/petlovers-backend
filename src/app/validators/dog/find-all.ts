import * as Yup from 'yup'
import { Request, Response, NextFunction } from 'express'

export const dogFindAllValidator = async (req: Request, res: Response, next: NextFunction): Promise<Response> => {
  try {
    const schema = Yup.object().shape({
      breed: Yup.string().required(),
      dewormed: Yup.boolean().required(),
      neutered: Yup.boolean().required()
    })

    await schema.validate(req.query, { abortEarly: false })

    next()
  } catch (err) {
    return res
      .status(400)
      .json({ error: 'Validation fails', messages: err.inner })
  }
}
