import express, { Router } from 'express'
import { verifyToken } from '../middleware/verifyToken'
import { isSuperadmin } from '../middleware/isSuperadmin'
import { register, login, whoAmI, getAllUser } from '../controllers/userController'

export const UserRouter: Router = Router()

// Register Member
UserRouter.post('/v1/auth/register', register)
// Login member, admin, superadmin
UserRouter.post('/v1/auth/login', login)
// Get all user member, admin, superadmin
UserRouter.get('/v1/user', getAllUser)
// Adding admin
UserRouter.post('/v1/admin', isSuperadmin, register)
// Current User
UserRouter.get('/v1/whoami', verifyToken, whoAmI)
