import { DeleteResult } from 'typeorm';

import { IUser } from '../../entity/user';

export interface IUserRepository {
	createUser(user: IUser):Promise<IUser>;
	getUsers():Promise<IUser[]>;
	deleteUser(id: number):Promise<DeleteResult>;
}
