import { EntityRepository, getManager, Repository } from 'typeorm';

import { IComment, Comment } from '../../entity/comment';
import { ICommentRepository } from './commentRepository.interface';

@EntityRepository(Comment)
class CommentRepository extends Repository<Comment> implements ICommentRepository {
    public async createComment(comment: IComment):Promise<IComment> {
        return getManager().getRepository(Comment).save(comment);
    }

    public async getCommentById(id: number):Promise<IComment[]> {
        return getManager().getRepository(Comment)
            .createQueryBuilder('comment')
            .where('comment.authorId = :id', { id })
            .leftJoinAndSelect('comment.user', 'user')
            .leftJoinAndSelect('comment.post', 'post')
            .getMany();
    }
}

export const commentRepository = new CommentRepository();
