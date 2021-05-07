import * as Yup from 'yup'
import { Request, Response, NextFunction } from 'express'

export const userUpdateValidator = async (req: Request, res: Response, next: NextFunction): Promise<Response> => {
  try {
    const schema = Yup.object().shape({
      name: Yup.string().required(),
      email: Yup.string()
        .email()
        .required(),
      oldPassword: Yup.string(),
      password: Yup.string().when('oldPassword', (oldPassword, field) =>
        oldPassword ? field.min(6).required() : field
      ),
      passwordConfirmation: Yup.string().when('password', (password, field) =>
        password ? field.required().oneOf([Yup.ref('password')]) : field
      )
    })

    await schema.validate(req.body, { abortEarly: false })

    next()
  } catch (err) {
    return res
      .status(400)
      .json({ error: 'Validation fails', messages: err.inner })
  }
}
