import { IComment } from '../../entity/comment';

export interface ICommentRepository {
	createComment(comment: IComment):Promise<IComment>;
	getCommentById(id: number):Promise<IComment[]>;
}
