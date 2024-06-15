import { Request, Response } from 'express';

export const user_Dashboard = async (req:Request, res:Response) :Promise<any> =>{
    try {
        
        res.status(200).send({ message: 'Welcome to the user dashboard!' });
    } catch (err) {
        console.error('Error in user_Dashboard:', err);
        res.status(500).send({ error: 'An error occurred. Please try again later.' });
    }
}