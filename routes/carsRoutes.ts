import upload from '../utils/upload';
import express from 'express';
import {
  getAllCars,
  getCarsById,
  createCars,
  updateCars,
  deleteCars
} from '../controllers/carsControllers';


const router = express.Router();

router.get('/api/v1/cars', getAllCars);
router.get('/api/v1/cars/:id', getCarsById);
router.post('/api/v1/cars', upload.single('image'), createCars);
router.put('/api/v1/cars/:id', upload.single('image'), updateCars);
router.delete('/api/v1/cars/:id', deleteCars);

export default router;
