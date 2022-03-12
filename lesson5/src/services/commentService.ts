import { IComment } from '../entity/comment';
import { commentRepository } from '../repositories/comment/commentRepository';

class CommentService {
    public async createComment(comment: IComment):Promise<IComment> {
        return commentRepository.createComment(comment);
    }

    public async getCommentById(id: number):Promise<IComment[]> {
        return commentRepository.getCommentById(id);
    }
}

export const commentService = new CommentService();
