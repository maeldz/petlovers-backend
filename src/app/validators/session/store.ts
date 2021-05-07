import * as Yup from 'yup'
import { Request, Response, NextFunction } from 'express'

export const sessionStoreValidator = async (req: Request, res: Response, next: NextFunction): Promise<Response> => {
  try {
    const schema = Yup.object().shape({
      email: Yup.string()
        .email()
        .required(),
      password: Yup.string().required()
    })

    await schema.validate(req.body, { abortEarly: false })

    next()
  } catch (err) {
    return res
      .status(400)
      .json({ error: 'Validation fails', messages: err.inner })
  }
}
