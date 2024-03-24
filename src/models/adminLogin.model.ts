import mongoose,{Schema} from "mongoose";
import { adminLogin } from "../interfaces";




 const adminLoginSchema = new Schema<Document & adminLogin>({
    username: { type: String, required: true },
    password: { type: String, required: true }
});

export const AdminLoginModel = mongoose.model<Document & adminLogin>('admin', adminLoginSchema);


