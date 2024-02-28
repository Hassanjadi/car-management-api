import { createUserValidation, createSessionValidation, refreshSessionValidation } from '../validations/authValidation'
import { checkPassword, hashing } from '../utils/hashing'
import userService from '../services/userServices'
import { signJWT, verifyJWT } from '../utils/jwt'
import { Request, Response } from 'express'
import { logger } from '../utils/logger'
import { v4 as uuidv4 } from 'uuid'

export const getAllUser = async (req: Request, res: Response) => {
  try {
    const user = await userService.getAllUser()
    logger.info('Success get user data')
    res.status(200).send({ status: true, statusCode: 200, message: 'Get data users success', data: user })
  } catch (error) {
    logger.error('ERR: user - get all user =', error)
    res.status(500).send({ status: false, statusCode: 500, message: 'Internal server error' })
  }
}

export const registerUser = async (req: Request, res: Response) => {
  req.body.id = uuidv4()
  const { error, value } = createUserValidation(req.body)
  if (error) {
    logger.error('ERR: auth - register =', error.details[0].message)
    return res.status(422).send({ status: false, statusCode: 422, message: error.details[0].message })
  }

  try {
    value.password = `${hashing(value.password)}`

    await userService.createUser(value)
    return res.status(201).json({ status: true, statusCode: 201, message: 'Success register user' })
  } catch (error) {
    logger.error('ERR: auth - register =', error)
    return res.status(422).send({ status: false, statusCode: 422, message: error })
  }
}

export const createSession = async (req: Request, res: Response) => {
  const { error, value } = createSessionValidation(req.body)
  if (error) {
    logger.error('ERR: auth - login =', error.details[0].message)
    return res.status(422).send({ status: false, statusCode: 422, message: error.details[0].message })
  }

  try {
    const user: any = await userService.findUserByEmail(value.email)
    const isValid = checkPassword(value.password, user.password)

    if (!isValid) return res.status(401).json({ status: false, statusCode: 401, message: 'Invalid email or password' })

    const accessToken = signJWT({ ...user }, { expiresIn: '1d' })

    const refreshToken = signJWT({ ...user }, { expiresIn: '1y' })

    return res
      .status(200)
      .send({ status: true, statusCode: 200, message: 'Login success', data: { accessToken, refreshToken } })
  } catch (error: any) {
    logger.error('ERR: auth - login =', error.message)
    return res.status(422).send({ status: false, statusCode: 422, message: error.message })
  }
}

export const refreshSession = async (req: Request, res: Response) => {
  const { error, value } = refreshSessionValidation(req.body)
  if (error) {
    logger.error('ERR: auth - refresh session =', error.details[0].message)
    return res.status(422).send({ status: false, statusCode: 422, message: error.details[0].message })
  }

  try {
    const { decoded }: any = verifyJWT(value.refreshToken)

    const user = await userService.findUserByEmail(decoded._doc.email)
    if (!user) return false

    const accessToken = signJWT(
      {
        ...user
      },
      { expiresIn: '1d' }
    )
    return res
      .status(200)
      .send({ status: true, statusCode: 200, message: 'Refresh session success', data: { accessToken } })
  } catch (error: any) {
    logger.error('ERR: auth - refresh session =', error.message)
    return res.status(422).send({ status: false, statusCode: 422, message: error.message })
  }
}

export const whoAmI = async (req: Request, res: Response) => {
  try {
    const user = res.locals.user
    res.status(200).send({ status: true, statusCode: 200, message: 'Get data users success', data: user })
  } catch (error) {
    logger.error('ERR: user - whoami =', error)
    res.status(500).send({ status: false, statusCode: 500, message: 'Internal server error' })
  }
}
