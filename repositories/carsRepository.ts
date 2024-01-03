import { carsModel } from '../models/carsModels'

class carsRepository {
    getAllCars() {
        return carsModel.query();
    }

    getCarsById(id: string) {
        return carsModel.query().findById(id)
    }

    createCars(carsData: Partial<carsModel>) {
        return carsModel.query().insert(carsData);
    }

    updateCars(id: string, carsData: Partial<carsModel>) {
        return carsModel.query().patchAndFetchById(id, carsData);
    }

    deleteCars(id: string) {
        return carsModel.query().deleteById(id);
    }
}

export default new carsRepository();