import { Router } from 'express';

import { postController } from '../controller/postController';

const router = Router();

router.post('/', postController.createPost);
router.post('/:userId', postController.getPostById);
router.patch('/:userId', postController.patchPostById);

export const postRouter = router;
