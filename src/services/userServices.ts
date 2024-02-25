import { UserModels } from '../models/userModels'
import userRepository from '../repositories/userRepository'

class userService {
  getAllUser() {
    return userRepository.getAllUser()
  }

  register(users: UserModels) {
    return userRepository.createUser(users)
  }

  login(email: string) {
    return userRepository.getUserByEmail(email)
  }
}

export default new userService()
