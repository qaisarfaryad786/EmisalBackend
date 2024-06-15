import { NextFunction, Request,Response } from "express";
import jwt from 'jsonwebtoken';
const secret_key = "emisalkey123"

export const authenticate  =  (req:Request, res:Response, next:NextFunction) =>{

    try{
        const authHeader = req.headers['authorization'];
       // console.log(authHeader);
        if (!authHeader) {
            return res.status(401).send({ message: 'Access token is missing' });
        }
    
        const bearerToken = authHeader.split(' ');
         const token = bearerToken[1];
        // console.log("splitted token",token);
        
       const decoded = jwt.verify(token, secret_key, (err: any) => {
        if (err) {
            if (err.name === 'TokenExpiredError') {
                return res.status(401).send({ message: 'Access Denied, Unauthorize' });
            }
            return res.status(403).send({ message: 'Something Went wrong' });
             } 
             next();   
    });
    
    
    }catch (err) {
        console.error('Unexpected error during authentication:', err);
        res.status(500).send({ message: 'Internal Server Error' });
    }
   
    return authenticate;
}