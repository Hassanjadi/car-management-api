import express, { Router } from 'express'
import upload from '../utils/upload'
import { authorize } from '../middleware/authorize'
import { getAllCars, getCarsById, createCars, updateCars, deleteCars } from '../controllers/carController'

export const CarRouter: Router = Router()

// Router car
CarRouter.get('/v1/cars', getAllCars)
CarRouter.get('/v1/cars/:id', getCarsById)
CarRouter.post('/v1/cars', authorize, upload.single('image'), createCars)
CarRouter.put('/v1/cars/:id', authorize, upload.single('image'), updateCars)
CarRouter.delete('/v1/cars/:id', authorize, deleteCars)
