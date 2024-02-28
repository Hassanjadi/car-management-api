import userRepository from '../repositories/userRepository'
import UserType from '../types/userType'

class userService {
  getAllUser() {
    return userRepository.getAllUser()
  }

  createUser(users: UserType) {
    return userRepository.createUser(users)
  }

  findUserByEmail(email: string) {
    return userRepository.getUserByEmail(email)
  }
}

export default new userService()
