import { userModel } from '../models/userModels'

class userRepository {
      createUser(userData: Partial<userModel>) {
        return userModel.query().insert(userData);
      }
    
      getUserByUsername(username: string) {
        return userModel.query().findOne({ username });
      }

      getUserByEmail(email: string) {
        return userModel.query().findOne({ email });
      }
}

export default new userRepository();