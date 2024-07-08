export interface adminLogin{
    username:string;
    password:string;
    role:string
}


export interface signup {
    name:string;
    username:string;
    password:string;
    role:string;
    isActive:boolean;
    createdAt?: Date;
}