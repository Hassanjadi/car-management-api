import carService from '../services/carServices'
import { Request, Response } from 'express';
import path from 'path';

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
    res.status(500).json({ error: "Internal Server Error" });
  }
};

export const createCars = async (req: Request, res: Response) => {
  try {
    if (!req.file) {
      return res.status(400).json({ message: 'No file uploaded' });
    }

    const imagePath = path.join('/images', req.file.filename);
    const CarData = { ...req.body, image: imagePath };

    const car = await carService.createCars(CarData);
    return res.status(201).json(car);
  } catch (error) {
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
    const CarData = { ...req.body, image: imagePath };

    const updatedCar = await carService.updateCars(carId, CarData);

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
    const car = await carService.deleteCars(req.params.id);
    if (car) {
      res.json({ message: 'Car deleted successfully' });
    } else {
      res.status(404).json({ message: 'Car not found' });
    }
  } catch (error) {
    res.status(500).json({ error: "Internal Server Error" });
  }
};