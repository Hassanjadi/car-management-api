import carsService from '../services/carsServices'
import { Request, Response } from 'express';
import path from 'path';

export const getAllCars = async (req: Request, res: Response) => {
  try {
    const cars = await carsService.getAllCars();
    res.json(cars);
  } catch (error) {
    res.status(500).json({ error: "error message" });
  }
};

export const getCarsById = async (req: Request, res: Response) => {
  try {
    const cars = await carsService.getCarsById(req.params.id);
    if (cars) {
      res.json(cars);
    } else {
      res.status(404).json({ message: 'Car not found' });
    }
  } catch (error) {
    res.status(500).json({ error: "error message" });
  }
};

export const createCars = async (req: Request, res: Response) => {
  try {
    if (!req.file) {
      return res.status(400).json({ message: 'No file uploaded' });
    }

    const imagePath = path.join('/images', req.file.filename);
    const CarsData = { ...req.body, image: imagePath };

    const cars = await carsService.createCars(CarsData);
    return res.status(201).json(cars);
  } catch (error) {
    return res.status(500).json({ error: "error message" });
  }
};

export const updateCars = async (req: Request, res: Response) => {
  try {
    const carsId = req.params.id ;

    if (!req.file) {
      return res.status(400).json({ error: 'No file uploaded' });
    }

    const imagePath = path.join('/images', req.file.filename);
    const CarsData = { ...req.body, image: imagePath };

    const updatedCar = await carsService.updateCars(carsId, CarsData);

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
    const cars = await carsService.deleteCars(req.params.id);
    if (cars) {
      res.json({ message: 'Car deleted successfully' });
    } else {
      res.status(404).json({ message: 'Car not found' });
    }
  } catch (error) {
    res.status(500).json({ error: "error message" });
  }
};
