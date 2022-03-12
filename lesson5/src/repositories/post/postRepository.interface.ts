import { UpdateResult } from 'typeorm';

import { IPost } from '../../entity/post';

export interface IPostRepository {
	createPost(post: IPost):Promise<IPost>;
	getPostById(id: number):Promise<IPost[]>;
	patchPostById(text: string, id: number):Promise<UpdateResult>;
}
