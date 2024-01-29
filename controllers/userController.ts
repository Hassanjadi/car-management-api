import userService from '../services/userServices';
import { Request, Response } from 'express';
import jwt from 'jsonwebtoken';

export const getAllUser = async (req: Request, res: Response) => {
  try {
    const user = await userService.getAllUser();
    res.json(user);
  } catch (error) {
    res.status(500).json({ error: "Internal Server Error" });
  }
}

export const register = async (req: Request, res: Response) => {
  try {
    const { username, email, password, role } = req.body;

    const user = await userService.register( username, email, password, role );
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

    const secretKey = process.env.JWT_SECRET || 'default_secret_key';
    const token = jwt.sign({ userId: user.id, role: user.role }, secretKey, { expiresIn: '1h' });

    return res.json({ user, token });
  } catch (error) {
    console.error(error);
    return res.status(401).json({ error: 'Invalid email or password' });
  }
}

export const whoAmI = async (req: Request, res: Response) => {
    res.status(200).json(req.user);
}