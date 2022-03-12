import { UpdateResult } from 'typeorm';

import { IPost } from '../entity/post';
import { postRepository } from '../repositories/post/postRepositiry';

class PostService {
    public async createdPost(post: IPost):Promise<IPost> {
        return postRepository.createPost(post);
    }

    public async getPostById(id: number):Promise<IPost[]> {
        return postRepository.getPostById(id);
    }

    public async patchPostById(text: string, id: number): Promise<UpdateResult> {
        return postRepository.patchPostById(text, id);
    }
}

export const postService = new PostService();
