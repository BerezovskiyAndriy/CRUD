import { Router } from 'express';

import { commentController } from '../controller/commentController';

const router = Router();

router.post('/', commentController.createComment);
router.get('/:userId', commentController.getCommentById);

export const commentRouter = router;
