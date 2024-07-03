import { Request, Response } from 'express';
import {UserSignupModel} from '../models'; // Assuming your model file is named signupModel.ts
import { signup } from '../interfaces';

export const checkUserExists = async (username: string): Promise<boolean> => {
    const existingUser = await UserSignupModel.findOne({ username });
    return existingUser !== null;
  };
  
  export const createUser = async (userData: signup): Promise<void> => {
    const newUser = new UserSignupModel(userData);
    await newUser.save();
  };