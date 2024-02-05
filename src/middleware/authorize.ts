import { Request, Response, NextFunction } from 'express';
import { User, userModel } from '../models/userModels';
import jwt, { JwtPayload } from 'jsonwebtoken';

declare global {
    namespace Express {
      interface Request {
        user?: User;
      }
    }
  }

export const authorize = async (req: Request, res: Response, next: NextFunction) => {
  const token = req.header('Authorization') || '';
  
  if (!token) {
    return res.status(401).json({ error: 'Unauthorized: Token not provided' });
  }

  const secretKey = process.env.JWT_SECRET || 'default_secret_key';
  
  try {
    const decoded = jwt.verify(token, secretKey) as JwtPayload;
  
    const user = await userModel.query().findById(decoded.userId);
  
    if (!user) {
      return res.status(403).json({ error: 'Forbidden: Invalid user' });
    }

    if (user.role === 'Member') {
        return res.status(401).json({
            message: "Unauthorized",
        })
    }

    req.user = user;
    next();
  } catch (err) {
    return res.status(403).json({ error: 'Forbidden: Invalid token' });
  }
};