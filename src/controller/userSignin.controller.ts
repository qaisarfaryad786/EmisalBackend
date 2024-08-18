import { Request, Response } from 'express';
import { userSigninService } from '../services';
import jwt from 'jsonwebtoken';

const secret_key = "emisalkey123";

export const userSigninController = async (req: Request, res: Response): Promise<any> => {
    const { username, password } = req.body;

    try {
        const user = await userSigninService.adminUser(username, password);

        if (user) {
            const { id,name, username, role } = user;

            const token = jwt.sign({ username, role }, secret_key, { expiresIn: '8h' });

            res.status(200).json({ id, token, name, username, role });
        } else {
            res.status(401).json({ message: "Invalid username or password" });
        }
    } catch (err) {
        res.status(400).send("Error during login");
    }
};
