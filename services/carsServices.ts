import CarsRepository from "../repositories/carsRepository";
import { carsModel } from "../models/carsModels";

class CarsService {
    getAllCars() {
        return CarsRepository.getAllCars();
    }

    getCarsById(id: string) {
        return CarsRepository.getCarsById(id);
    }

    createCars(carsData: Partial<carsModel>) {
        return CarsRepository.createCars(carsData);
    }

    updateCars(id: string, carsData: Partial<carsModel>) {
        return CarsRepository.updateCars(id, carsData);
    }

    deleteCars(id: string) {
        return CarsRepository.deleteCars(id);
    }
}

export default new CarsService;