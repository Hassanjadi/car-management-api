import { Model, ModelObject } from 'objection'

export class UserModel extends Model {
  id!: string
  username!: string
  email!: string
  password!: string
  role!: string

  static get tableName() {
    return 'user'
  }
}

export type UserModels = ModelObject<UserModel>
