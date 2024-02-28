import { Model, ModelObject } from 'objection'
import { UserModel } from './userModels'

export class CarModel extends Model {
  id!: string
  plate!: string
  manufacture!: string
  model!: string
  image!: string
  rentPerDay!: number
  capacity!: number
  description!: string
  availableAt!: Date
  transmission!: string
  available!: boolean
  type!: string
  year!: number
  options!: string[]
  specs!: string[]
  createdBy!: string
  updatedBy!: string
  deletedBy!: string
  createdAt!: Date
  updatedAt!: Date

  static get tableName() {
    return 'cars'
  }

  static get relationMappings() {
    return {
      createdBy: {
        relation: Model.BelongsToOneRelation,
        modelClass: UserModel,
        join: {
          from: 'cars.createdBy',
          to: 'users.id'
        }
      },
      updatedBy: {
        relation: Model.BelongsToOneRelation,
        modelClass: UserModel,
        join: {
          from: 'cars.updatedBy',
          to: 'users.id'
        }
      },
      deletedBy: {
        relation: Model.BelongsToOneRelation,
        modelClass: UserModel,
        join: {
          from: 'cars.deletedBy',
          to: 'users.id'
        }
      }
    }
  }
}

export type CarModels = ModelObject<CarModel>
