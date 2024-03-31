import { Request, Response } from 'express';
import { adminService } from "../services";

export const adminLogin = async (req: Request, res: Response): Promise<any> => {
    const { username, password } = req.body; 
    try {
        const adminUserLogin = await adminService.adminUser(username, password); 
        res.send(adminUserLogin);
    } catch (err) {
        res.status(400).send(err); 
    }
};
