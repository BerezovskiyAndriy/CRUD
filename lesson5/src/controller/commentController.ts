import { Request, Response } from 'express';
import { UpdateResult } from 'typeorm';

import { IComment } from '../entity/comment';
import { commentService } from '../services/commentService';

class CommentController {
    public async createComment(req: Request, res: Response): Promise<Response<IComment>> {
        const createdComment = await commentService.createComment(req.body);
        return res.json(createdComment);
    }

    public async getCommentById(req: Request, res: Response): Promise<Response<UpdateResult>> {
        const comments = await commentService.getCommentById(+req.params.userId);
        return res.json(comments);
    }
}

export const commentController = new CommentController();
