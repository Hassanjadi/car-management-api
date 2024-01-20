import { userModel, User } from '../models/userModels'

class userRepository {
  getAllUser() {
    return userModel.query();
  }

  createUser(userData: Partial<User>) {
    return userModel.query().insert(userData);
  }

  getUserByEmail(email: string) {
    return userModel.query().findOne({ email });
  }
}

export default new userRepository();