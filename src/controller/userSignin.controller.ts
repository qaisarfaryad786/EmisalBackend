import { Request, Response } from 'express';
import { userSigninService } from "../services";
import jwt from 'jsonwebtoken';
const secret_key = "emisalkey123"

export const userSigninController = async (req: Request, res: Response): Promise<any> => {
    const { username, password } = req.body; 
    try {
        const UserLogin = await userSigninService.adminUser(username, password);
        if (UserLogin) {
              const token = jwt.sign({ User: UserLogin }, secret_key, { expiresIn: '8h' });
            res.status(200).send({ token,userLogin:UserLogin });
        } else {
            res.status(401).json({ message: "Invalid username or password" });
        } 

    } catch (err) {
        res.status(400).send("err"); 
    }
};
