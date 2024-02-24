import { CarModel, CarModels } from '../models/carModel'

class carRepository {
  getAllCars() {
    return CarModel.query()
  }

  getCarsById(id: string) {
    return CarModel.query().findById(id)
  }

  createCars(cars: CarModels) {
    return CarModel.query().insert(cars)
  }

  updateCars(id: string, cars: CarModels) {
    return CarModel.query().patchAndFetchById(id, cars)
  }

  deleteCars(id: string) {
    return CarModel.query().deleteById(id)
  }
}

export default new carRepository()
