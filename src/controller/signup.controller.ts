import { Request, Response } from 'express';
import { signupService } from '../services';
import { signup } from '../interfaces';

export const signupUser = async (req: Request, res: Response) => {
  try {
    // Extract data from request body
    const { name, username, password, role, isActive }: signup = req.body;

    // Validate the required fields
    if (!name || !username || !password || !role) {
      return res.status(400).json({ message: 'All fields are required' });
    }

    // Check if user already exists
    const userExists = await signupService.checkUserExists(username);
    if (userExists) {
      return res.status(409).json({ message: 'Username already exists' });
    }

    // Create a new user
    await signupService.createUser({ name, username, password, role, isActive, createdAt: new Date() });

    // Return success response
    return res.status(201).json({ message: 'User created successfully',name,username,password,role,isActive });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: 'Internal server error' });
  }
};
