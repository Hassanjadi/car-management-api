import { authorize } from "../middleware/authorize";
import upload from "../utils/upload";
import express from "express";
import {
  getAllCars,
  getCarsById,
  createCars,
  updateCars,
  deleteCars,
} from "../controllers/carController";

const router = express.Router();

// Router car
router.get("/api/v1/cars", authorize, getAllCars);
router.get("/api/v1/cars/:id", authorize, getCarsById);
router.post("/api/v1/cars", authorize, upload.single("image"), createCars);
router.put("/api/v1/cars/:id", authorize, upload.single("image"), updateCars);
router.delete("/api/v1/cars/:id", authorize, deleteCars);

export default router;
