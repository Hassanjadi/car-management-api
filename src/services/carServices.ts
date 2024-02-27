import carRepository from '../repositories/carRepository'
import CarType from '../types/carType'

class carService {
  getAllCars() {
    return carRepository.getAllCars()
  }

  getCarsById(id: string) {
    return carRepository.getCarsById(id)
  }

  createCars(cars: CarType) {
    return carRepository.createCars(cars)
  }

  updateCars(id: string, cars: CarType) {
    return carRepository.updateCars(id, cars)
  }

  deleteCars(id: string) {
    return carRepository.deleteCars(id)
  }
}

export default new carService()
