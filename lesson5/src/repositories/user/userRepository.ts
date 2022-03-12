import {
    DeleteResult, EntityRepository, getManager, Repository,
} from 'typeorm';

import { IUser, User } from '../../entity/user';
import { IUserRepository } from './userRepository.interface';

@EntityRepository(User)
class UserRepository extends Repository<User> implements IUserRepository {
    public async createUser(user: IUser):Promise<IUser> {
        return getManager().getRepository(User).save(user);
    }

    public async getUsers():Promise<IUser[]> {
        return getManager().getRepository(User).find();
    }

    public async deleteUser(id: number):Promise<DeleteResult> {
        return getManager().getRepository(User).delete(
            { id },
        );
    }
}

export const userRepository = new UserRepository();
