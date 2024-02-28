import { gettingCars, createCars, updateCars, deleteCars } from '../controllers/carController'
import { requireAdmin, requireUser } from '../middleware/auth'
import upload from '../utils/upload'
import { Router } from 'express'

export const CarRouter: Router = Router()

// router car
CarRouter.get('/v1/cars', gettingCars)
CarRouter.get('/v1/cars/:id', requireUser, gettingCars)
CarRouter.post('/v1/cars', requireAdmin, upload.single('image'), createCars)
CarRouter.put('/v1/cars/:id', requireAdmin, upload.single('image'), updateCars)
CarRouter.delete('/v1/cars/:id', requireAdmin, deleteCars)
