import { Cars, carModel } from "../models/carModel";

class carRepository {
  getAllCars() {
    return carModel.query();
  }

  getCarsById(id: string) {
    return carModel.query().findById(id);
  }

  createCars(carData: Partial<Cars>) {
    return carModel.query().insert(carData);
  }

  updateCars(id: string, carData: Partial<carModel>) {
    return carModel.query().patchAndFetchById(id, carData);
  }

  deleteCars(id: string) {
    return carModel.query().deleteById(id);
  }
}

export default new carRepository();
