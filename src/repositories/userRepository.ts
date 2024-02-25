import { UserModel, UserModels } from '../models/userModels'

class userRepository {
  getAllUser() {
    return UserModel.query()
  }

  createUser(users: UserModels) {
    return UserModel.query().insert(users)
  }

  getUserByEmail(email: string) {
    return UserModel.query().findOne({ email })
  }
}

export default new userRepository()
