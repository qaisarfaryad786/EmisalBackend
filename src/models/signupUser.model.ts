import mongoose, { Schema } from "mongoose";
import { signup } from "../interfaces";

const signupSchema = new Schema<Document & signup>({
  name: { type: String, required: true },
  username: { type: String, required: true },
  password: { type: String, required: true },
  role: { type: String, required: true },
  createdAt: { type: Date, default: Date.now } // Added datetime field
});


export const UserSignupModel = mongoose.model<Document & signup>('userSignup', signupSchema);
