import bcrypt from 'bcrypt';
import UserRepository from '../repositories/userRepository';


class userService {
  async register(username: string, email: string, password: string, role: string = 'member') {
    const hashedPassword = await bcrypt.hash(password, 10);
    const userData = { username, email, password: hashedPassword, role };

    const user = await UserRepository.createUser(userData);
    return user;
  }

  async login(email: string, password: string) {
    const user = await UserRepository.getUserByEmail(email);

    if (!user) {
      throw new Error('Invalid email or password');
    }

    const passwordMatch = await bcrypt.compare(password, user.password);

    if (!passwordMatch) {
      throw new Error('Invalid email or password');
    }

    return user;
  }
}

export default new userService;