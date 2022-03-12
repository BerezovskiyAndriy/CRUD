import { DeleteResult } from 'typeorm';

import { IUser } from '../entity/user';
import { userRepository } from '../repositories/user/userRepository';

class UserService {
    public async createUser(user: IUser):Promise<IUser> {
        return userRepository.createUser(user);
    }

    public async users(): Promise<IUser[]> {
        return userRepository.getUsers();
    }

    public async deleteUser(id: number): Promise<DeleteResult> {
        return userRepository.deleteUser(id);
    }
}

export const userService = new UserService();
