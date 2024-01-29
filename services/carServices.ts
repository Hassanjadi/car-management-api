import carRepository from "../repositories/carRepository";
import { carModel, Cars } from "../models/carModel";

class carService {
    getAllCars() {
        return carRepository.getAllCars();
    }

    getCarsById(id: string) {
        return carRepository.getCarsById(id);
    }

    createCars(carData: Partial<Cars>) {
        return carRepository.createCars(carData);
    }

    updateCars(id: string, carData: Partial<carModel>) {
        return carRepository.updateCars(id, carData);
    }

    deleteCars(id: string) {
        return carRepository.deleteCars(id);
    }
}

export default new carService;