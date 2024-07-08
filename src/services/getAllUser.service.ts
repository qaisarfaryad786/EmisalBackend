import { UserSignupModel } from "../models";


export const getUsers = async (): Promise<any> => {
    try {
        const users = await UserSignupModel.find().exec();
        return users;
    } catch (error) {
        console.error("Error While fetching the users");
    }
}
