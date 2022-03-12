import { Request, Response } from 'express';
import { UpdateResult } from 'typeorm';

import { IPost } from '../entity/post';
import { postService } from '../services/postService';

class PostController {
    public async createPost(req: Request, res: Response): Promise<Response<IPost>> {
        const posts = await postService.createdPost(req.body);
        return res.json(posts);
    }

    public async getPostById(req: Request, res: Response): Promise<Response<IPost[]>> {
        const user = await postService.getPostById(+req.params.userId);
        return res.json(user);
    }

    public async patchPostById(req: Request, res: Response): Promise<Response<UpdateResult>> {
        const { text } = req.body;
        const updatedPost = await postService.patchPostById(text, Number(req.params.userId));
        return res.json(updatedPost);
    }
}

export const postController = new PostController();
