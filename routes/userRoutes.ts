import { isSuperadmin } from '../middleware/isSuperadmin';
import { verifyToken } from '../middleware/verifyToken';
import express from 'express';
import { 
    register,
    login,
    whoAmI,
    getAllUser
} from '../controllers/userController';

const router = express.Router();

// Register Member
router.post('/api/v1/register', register);
// Login member, admin, superadmin
router.post('/api/v1/login', login);
// Get all user member, admin, superadmin
router.get('/api/v1/user', getAllUser);
// Adding admin
router.post('/api/v1/admin', isSuperadmin, register);
// Current User
router.get('/api/v1/who-am-i', verifyToken, whoAmI);

export default router;