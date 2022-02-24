import express from 'express';

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