import { Router } from 'express';

import { userController } from '../controller/userController';

const router = Router();

router.post('/', userController.createUser);
router.get('/', userController.getUser);
router.delete('/:id', userController.deleteUser);

export const userRouter = router;
