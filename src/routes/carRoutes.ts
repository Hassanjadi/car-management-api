import { Router } from 'express'
import upload from '../utils/upload'
import { getAllCars, getCarsById, createCars, updateCars, deleteCars } from '../controllers/carController'
import { requireAdmin } from '../middleware/auth'

export const CarRouter: Router = Router()

// router car
CarRouter.get('/v1/cars', getAllCars)
CarRouter.get('/v1/cars/:id', getCarsById)
CarRouter.post('/v1/cars', requireAdmin, upload.single('image'), createCars)
CarRouter.put('/v1/cars/:id', requireAdmin, upload.single('image'), updateCars)
CarRouter.delete('/v1/cars/:id', requireAdmin, deleteCars)
