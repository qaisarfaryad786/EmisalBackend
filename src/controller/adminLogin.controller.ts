import { Request, Response } from 'express';
import { adminService } from "../services";
import jwt from 'jsonwebtoken';
const secret_key = "emisalkey123"

export const adminLogin = async (req: Request, res: Response): Promise<any> => {
    const { username, password } = req.body; 
    try {
        const adminUserLogin = await adminService.adminUser(username, password); 
        if (adminUserLogin) {
            const {username,role} = adminUserLogin;
        const token = jwt.sign({ username,role }, secret_key, { expiresIn: '8h' });
            res.status(200).json({token,username,role});
        } else {
            res.status(401).json({ message: "Invalid username or password" });
        } 

    } catch (err) {
        res.status(400).send("err"); 
    }
};
