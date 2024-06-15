import { Request, Response } from 'express';
import { adminService } from "../services";
import jwt from 'jsonwebtoken';
const secret_key = "emisalkey123"

export const adminLogin = async (req: Request, res: Response): Promise<any> => {
    const { username, password } = req.body; 
    try {
        const adminUserLogin = await adminService.adminUser(username, password); 
        if (adminUserLogin) {
              const token = jwt.sign({ User: adminUserLogin }, secret_key, { expiresIn: '1min' });
            res.status(200).send({ message: 'Login successful',token });
            //  console.log(token)
            // console.log(adminUserLogin);
        } else {
            res.status(401).send({ message: "Invalid username or password" });
        } 

    } catch (err) {
        res.status(400).send("err"); 
    }
};
