import mongoose,{Schema} from "mongoose";
import { firSystem } from "../interfaces";

const firSchema = new Schema<Document & firSystem> ({
  year: { type: String, required: true },
  firNumber: { type: String, required: true },
  district: { type: String, required: true },
  policeStation: { type: String, required: true },
  incidentDateTime: { type: Date, required: true },
  referenceNumber: { type: String, required: true },
  currentDateTime: { type: Date, required: true },
  applicantName: { type: String, required: true },
  applicantFatherName: { type: String, required: true },
  nicNumber: { type: Number, required: true },
  phoneNumber: { type: Number, required: true },
  crime: { type: [String], required: true },
  initialReport: { type: String, required: true },
  userId: {type: String, required: true}
}, {
  timestamps: true
});

export const firSystemModel = mongoose.model<Document & firSystem>('firSystem',firSchema);
