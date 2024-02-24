import carService from '../services/carServices'
import { Request, Response } from 'express'
import path from 'path'

export const getAllCars = async (req: Request, res: Response) => {
  try {
    const cars = await carService.getAllCars()
    res.status(200).send({ status: true, statusCode: 200, message: 'Get data cars success', data: cars })
  } catch (error) {
    res.status(500).send({ status: false, statusCode: 500, message: 'Internal server error' })
  }
}

export const getCarsById = async (req: Request, res: Response) => {
  try {
    const cars = await carService.getCarsById(req.params.id)
    if (cars) {
      res.status(200).send({ status: true, statusCode: 200, message: 'Get data cars success', data: cars })
    } else {
      res.status(404).send({ status: false, statusCode: 404, message: 'Car not found' })
    }
  } catch (error) {
    res.status(500).send({ status: false, statusCode: 500, message: 'Internal server error' })
  }
}

export const createCars = async (req: Request, res: Response) => {
  try {
    if (!req.file) {
      return res.status(400).send({ status: false, statusCode: 400, message: 'No file uploaded' })
    }

    const imagePath = path.join('/images', req.file.filename)
    const userId = req.user?.id

    if (!userId) {
      return res.status(401).send({ status: false, statusCode: 400, message: 'Unauthorized' })
    }

    const carsData = { ...req.body, image: imagePath, createdBy: userId }

    const cars = await carService.createCars(carsData)
    return res.status(201).send({ status: true, statusCode: 201, message: 'Create data cars success', data: cars })
  } catch (error) {
    res.status(500).send({ status: false, statusCode: 500, message: 'Internal server error' })
  }
}

export const updateCars = async (req: Request, res: Response) => {
  try {
    const carId = req.params.id

    if (!req.file) {
      return res.status(400).send({ status: false, statusCode: 400, message: 'No file uploaded' })
    }

    const imagePath = path.join('/images', req.file.filename)
    const userId = req.user?.id

    if (!userId) {
      return res.status(401).send({ status: false, statusCode: 400, message: 'Unauthorized' })
    }

    const carData = { ...req.body, image: imagePath, updatedBy: userId }

    const updatedCars = await carService.updateCars(carId, carData)

    if (updatedCars) {
      return res
        .status(200)
        .send({ status: true, statusCode: 200, message: 'Edit data cars success', data: updateCars })
    } else {
      res.status(404).send({ status: false, statusCode: 404, message: 'Data cars not found' })
    }
  } catch (error) {
    res.status(500).send({ status: false, statusCode: 500, message: 'Internal server error' })
  }
}

export const deleteCars = async (req: Request, res: Response) => {
  try {
    const userId = req.user?.id

    const cars = await carService.deleteCars(req.params.id)
    if (cars) {
      res.status(200).send({ status: true, statusCode: 200, message: 'Car deleted successfully by user:' + userId })
    } else {
      res.status(404).send({ status: true, statusCode: 404, message: 'Car not found' })
    }
  } catch (error) {
    res.status(500).send({ status: false, statusCode: 500, message: 'Internal server error' })
  }
}
