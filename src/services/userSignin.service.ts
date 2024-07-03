import { UserSignupModel } from "../models";

export const adminUser = async (username: string, password: string): Promise<any> => {
    // Validation
    if (!username || !password) {
        console.error("Username and password are required.");
    }

    const userData = await UserSignupModel.findOne({ username, password });

    if (!userData) {
        console.error("Invalid username or password.");
    }

    return userData;
};
