import UserType from '../types/userType'
import userRepository from '../repositories/userRepository'

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
