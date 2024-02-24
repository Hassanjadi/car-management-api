import carRepository from '../repositories/carRepository'
import { CarModels } from '../models/carModel'

class carService {
  getAllCars() {
    return carRepository.getAllCars()
  }

  getCarsById(id: string) {
    return carRepository.getCarsById(id)
  }

  createCars(cars: CarModels) {
    return carRepository.createCars(cars)
  }

  updateCars(id: string, cars: CarModels) {
    return carRepository.updateCars(id, cars)
  }

  deleteCars(id: string) {
    return carRepository.deleteCars(id)
  }
}

export default new carService()
