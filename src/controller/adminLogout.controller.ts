import express from 'express'
import { Request,Response } from 'express';
 import jwt from 'jsonwebtoken';


export const AdminLogoutController = (req:Request, res:Response) =>{

    try {
        const authHeader = req.headers['authorization'];
        if (!authHeader) {
            return res.status(401).send({ message: 'Access token is missing' });
        }
    
        const bearerToken = authHeader.split(' ');
         const token = bearerToken[1];        
        console.log(token);
        
         
    } catch (err) {
        console.error('Error during logout:', err);
        res.status(500).send({ message: 'Internal Server Error' });
    }
}