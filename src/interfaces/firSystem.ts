import { ObjectId } from "mongoose";

export interface firSystem {
    year:string;
    firNumber:string;
    district:string;
    policeStation:string;
    incidentDateTime: Date;
    referenceNumber:string;
    currentDateTime:Date;
    applicantName:string;
    applicantFatherName:string;
    nicNumber:number;
    phoneNumber:Number;
    crime:string[];
    initialReport:string;
    userId:string;
}