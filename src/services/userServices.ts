import userModel from "../models/userModel";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

interface RegisterParams{
    firstName: string;
    lastName: string;
    email:string;
    password:string;
}

export async function register({firstName, lastName, email, password} : RegisterParams){
    const findUser = await userModel.findOne({email})
    if(findUser){
        return {data: "User already exists!" , statusCode: 400};
    }
    const hashedPassword = await bcrypt.hash(password, 10);
    const newUser = new userModel({firstName, lastName, email, password: hashedPassword})
    await newUser.save();

    return {data: generateJWT({firstName, lastName, email}), statusCode: 200};
}

interface loginParams {
    email: string;
    password: string;
}

export async function login({email, password}:loginParams) {
    const findUser = await userModel.findOne({email})

    if(!findUser){
        return {data: "Incorrect email or password!", statusCode:400 }
    }
    const passwordMatch = await bcrypt.compare(password, findUser.password);
    if(passwordMatch){
        return {data: generateJWT({firstName: findUser.firstName, lastName: findUser.lastName, email}), statusCode:200};
    }
    return {data: "Incorrect email or password!", statusCode:400 }
}

function generateJWT( data: any){
    return jwt.sign(data, "43AB5EDF15E13B983FE31453E9B82");
}