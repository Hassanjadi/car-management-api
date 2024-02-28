import { getAllUser, registerUser, createSession, refreshSession, whoAmI } from '../controllers/userController'
import { requireSuperadmin, requireUser } from '../middleware/auth'
import { Router } from 'express'

export const UserRouter: Router = Router()

// router auth
UserRouter.post('/v1/auth/register', registerUser)
UserRouter.post('/v1/auth/login', createSession)
UserRouter.post('/v1/auth/refresh', refreshSession)

// router user
UserRouter.get('/v1/users', getAllUser)
UserRouter.post('/v1/admin', requireSuperadmin, registerUser)
UserRouter.get('/v1/whoami', requireUser, whoAmI)
