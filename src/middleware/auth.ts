import { Request, Response, NextFunction } from 'express'

export const requireUser = (req: Request, res: Response, next: NextFunction) => {
  const user = res.locals.user
  if (!user) {
    return res.status(403).send('Forbidden: User is required')
  }

  return next()
}

export const requireAdmin = (req: Request, res: Response, next: NextFunction) => {
  const user = res.locals.user
  if (!user || user.role === 'Member') {
    return res.status(403).send('Forbidden: Superadmin/Admin role is required')
  }

  return next()
}

export const requireSuperadmin = (req: Request, res: Response, next: NextFunction) => {
  const user = res.locals.user
  if (!user || user.role !== 'Superadmin') {
    return res.status(403).send('Forbidden: Superadmin role is required')
  }

  return next()
}
