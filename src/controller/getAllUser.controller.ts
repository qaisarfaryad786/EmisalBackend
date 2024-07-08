import { Request, Response } from 'express';
import { getAllUserService } from '../services';

export const getAllUsers = async (req: Request, res: Response): Promise<void> => {
    try {
        const users = await getAllUserService.getUsers();
        res.status(200).json(users);
    } catch (error) {
        res.status(500).json({ message:"Error while fetching users" });
    }
}
