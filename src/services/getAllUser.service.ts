import { UserSignupModel } from "../models";

export const getUsers = async (): Promise<any> => {
    try {
        // Fetch users and sort them by createdAt in descending order
        const users = await UserSignupModel.find().sort({ createdAt: -1 }).exec();
        return users;
    } catch (error) {
        throw new Error("Error while fetching the users");
    }
}
