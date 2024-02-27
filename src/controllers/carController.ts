import carService from '../services/carServices'
import { Request, Response } from 'express'
import { logger } from '../utils/logger'

export const gettingCars = async (req: Request, res: Response) => {
  const {
    params: { id }
  } = req

  if (id) {
    const car = await carService.getCarsById(id)
    if (car) {
      logger.info('Succes get car data')
      return res.status(200).send({ status: true, statusCode: 200, data: car })
    } else {
      return res.status(200).send({ status: true, statusCode: 200, message: 'Data Not Found', data: {} })
    }
  } else {
    const cars = await carService.getAllCars()
    logger.info('Success get cars data')
    return res.status(200).send({ status: true, statusCode: 200, data: cars })
  }
}

export const createCars = async (req: Request, res: Response) => {
  try {
    if (!req.file) {
      return res.status(400).send({ status: false, statusCode: 400, message: 'No file uploaded' })
    }

    const image = `./image/${req.file.filename}`
    const user = res.locals.user.id

    const cars = { ...req.body, image: image, createdBy: user }

    const car = await carService.createCars(cars)
    logger.info('Success add new car')
    return res.status(201).send({ status: true, statusCode: 201, message: 'Create data cars success', data: car })
  } catch (error) {
    logger.error('ERR: car - create = ', error)
    res.status(500).send({ status: false, statusCode: 500, message: 'Internal server error' })
  }
}

export const updateCars = async (req: Request, res: Response) => {
  const {
    params: { id }
  } = req

  try {
    if (!req.file) {
      return res.status(400).send({ status: false, statusCode: 400, message: 'No file uploaded' })
    }

    const image = `./image/${req.file.filename}`
    const user = res.locals.user.id

    const carData = { ...req.body, image: image, updatedBy: user }

    const updatedCars = await carService.updateCars(id, carData)

    if (updatedCars) {
      logger.info('Success update car data')
      return res
        .status(200)
        .send({ status: true, statusCode: 200, message: 'Edit data cars success', data: updatedCars })
    } else {
      res.status(404).send({ status: false, statusCode: 404, message: 'Data cars not found' })
    }
  } catch (error: any) {
    logger.error('ERR: car - update = ', error.details[0].message)
    res.status(500).send({ status: false, statusCode: 500, message: 'Internal server error' })
  }
}

export const deleteCars = async (req: Request, res: Response) => {
  const {
    params: { id }
  } = req

  try {
    const user = res.locals.user.username
    const cars = await carService.deleteCars(id)

    if (cars) {
      logger.info('Success delete car')
      res.status(200).send({ status: true, statusCode: 200, message: 'Car deleted successfully by ' + user })
    } else {
      res.status(404).send({ status: true, statusCode: 404, message: 'Car not found' })
    }
  } catch (error: any) {
    logger.error('ERR: car - delete = ', error.details[0].message)
    res.status(500).send({ status: false, statusCode: 500, message: 'Internal server error' })
  }
}
