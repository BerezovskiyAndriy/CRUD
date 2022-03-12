import { Request, Response } from 'express';
import { DeleteResult } from 'typeorm';

import { IUser } from '../entity/user';
import { userService } from '../services/userService';

class UserController {
    public async createUser(req:Request, res:Response): Promise<Response<IUser>> {
        const createdUser = await userService.createUser(req.body);
        return res.json(createdUser);
    }

    public async getUser(req:Request, res:Response): Promise<Response<IUser[]>> {
        const users = await userService.users();
        return res.json(users);
    }

    public async deleteUser(req:Request, res:Response): Promise<Response<DeleteResult>> {
        const deletedUser = await userService.deleteUser(Number(req.params.id));
        return res.json(deletedUser);
    }
}

export const userController = new UserController();
