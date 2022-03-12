import {
    EntityRepository, getManager, Repository, UpdateResult,
} from 'typeorm';

import { IPost, Post } from '../../entity/post';
import { IPostRepository } from './postRepository.interface';

@EntityRepository(Post)
class PostRepository extends Repository<Post> implements IPostRepository {
    public async createPost(post: IPost):Promise<IPost> {
        return getManager().getRepository(Post).save(post);
    }

    public async getPostById(id: number):Promise<IPost[]> {
        return getManager().getRepository(Post)
            .createQueryBuilder('post')
            .where('post.userId = :id', { id })
            .leftJoin('User', 'user', 'user.id = post.userId')
            .getMany();
    }

    public async patchPostById(text: string, id: number):Promise<UpdateResult> {
        return getManager()
            .getRepository(Post)
            .update({ userId: id }, { text });
    }
}

export const postRepository = new PostRepository();
