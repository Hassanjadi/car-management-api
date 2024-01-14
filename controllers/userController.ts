import { Request, Response } from 'express';
import userService from '../services/userServices';

export const register = async (req: Request, res: Response) => {
  try {
    const { username, email, password, role } = req.body;

    const user = await userService.register(username, email, password, role);
    return res.status(201).json(user);
  } catch (error) {
    console.error(error);
    return res.status(500).json({ error: 'Internal Server Error' });
  }
}

export const login = async (req: Request, res: Response) => {
  try {
    const { email, password } = req.body;
  
    const user = await userService.login(email, password);
    return res.json(user);
  } catch (error) {
    console.error(error);
    return res.status(401).json({ error: 'Invalid email or password' });
  }
}