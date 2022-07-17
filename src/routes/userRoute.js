// global import
import express from 'express';

// local import
import { user } from '../controllers/index.js';


const router = express.Router();

router.post('/register-user', user.addUser);

export default router;