import carService from '../services/carServices'
import { Request, Response } from 'express';
import { User } from '../models/userModels';
import path from 'path';

declare global {
  namespace Express {
    interface Request {
      user?: User;
    }
  }
}

export const getAllCars = async (req: Request, res: Response) => {
  try {
    const car = await carService.getAllCars();
    res.json(car);
  } catch (error) {
    res.status(500).json({ error: "Internal Server Error" });
  }
};

export const getCarsById = async (req: Request, res: Response) => {
  try {
    const car = await carService.getCarsById(req.params.id);
    if (car) {
      res.json(car);
    } else {
      res.status(404).json({ message: 'Car not found' });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

export const createCars = async (req: Request, res: Response) => {
  try {
    if (!req.file) {
      return res.status(400).json({ message: 'No file uploaded' });
    }

    const imagePath = path.join('/images', req.file.filename);
    const userId = req.user?.id;

    if (!userId) {
      return res.status(401).json({ message: 'Unauthorized' });
    }

    const carData = { ...req.body, image: imagePath, createdBy: userId };

    const car = await carService.createCars(carData);
    return res.status(201).json(car);
  } catch (error) {
    console.error(error)
    return res.status(500).json({ error: "Internal Server Error" });
  }
};


export const updateCars = async (req: Request, res: Response) => {
  try {
    const carId = req.params.id ;

    if (!req.file) {
      return res.status(400).json({ error: 'No file uploaded' });
    }

    const imagePath = path.join('/images', req.file.filename);
    const userId = req.user?.id;

    if (!userId) {
      return res.status(401).json({ message: 'Unauthorized' });
    }

    const carData = { ...req.body, image: imagePath, updatedBy: userId };

    const updatedCar = await carService.updateCars(carId, carData);

    if (updatedCar) {
      return res.json(updatedCar);
    } else {
      return res.status(404).json({ message: 'Car not found' });
    }
  } catch (error) {
    console.error(error);
    return res.status(500).json({ error: 'Internal Server Error' });
  }
};

export const deleteCars = async (req: Request, res: Response) => {
  try {
    const userId = req.user?.id;

    const car = await carService.deleteCars(req.params.id);
    if (car) {
      res.json({ message: 'Car deleted successfully by user: ' + userId });
    } else {
      res.status(404).json({ message: 'Car not found' });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};