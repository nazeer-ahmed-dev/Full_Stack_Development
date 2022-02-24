import express from 'express';
import { v4 as uuidv4 } from 'uuid';
import { createUser,getUser ,deleteUser,updateUser,main1} from '../controller/user.js';
const router = express.Router();



// all routes in here are starting with / users
router.get('/',main1)
// adding data
router.post('/',createUser)
router.get('/:id',getUser)
router.delete('/:id',deleteUser)
router.patch('/:id',updateUser)


export default router;