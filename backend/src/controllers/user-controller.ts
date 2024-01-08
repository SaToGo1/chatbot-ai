import { NextFunction, Request, Response } from 'express';
import User from '../models/User.js';
import bcryptjs from 'bcryptjs';
const { hash, compare } = bcryptjs;
import { createToken } from '../utils/token-manager.js';
import { COOKIE_NAME } from '../utils/constants.js';

export const getAllUsers = async (
    req:Request, 
    res:Response, 
    next: NextFunction
) => {
    try {
        // get all users from database
        const users = await User.find({})
        return res.status(200).json({message: "OK", users})
    } catch (error) {
        console.log(error)
        const message = (error as Error).message
        return res.status(500).json({ message: "ERROR", cause: message })
    }
}

export const userSignup = async (
    req:Request, 
    res:Response, 
    next: NextFunction
) => {
    try {
        const { name, email, password } = req.body;

        // USER SHOULD NOT EXIST, make sure the user does not exist
        // before creating the new user.
        const existingUser = await User.findOne({ email });
        if(existingUser) return res.status(401).send('User already registered');

        // encrypt the password and create a new user.
        // the user is saved in database with encrypted password.
        const hashedPassword = await hash(password, 10);
        const user = new User({name, email, password: hashedPassword});
        await user.save();

        // create token and store cookie
        res.clearCookie(COOKIE_NAME, {
            domain: 'localhost',
            httpOnly: true,
            signed: true,
            path: '/'
        })

        const token = createToken(user._id.toString(), user.email, '7d')
        const expires = new Date();
        expires.setDate(expires.getDate() + 7);
        res.cookie(COOKIE_NAME, token, {
            path: '/',
            domain: 'localhost',
            expires,
            httpOnly: true,
            signed: true
        });

        return res.status(201).json({ message: 'OK', name: user.name, email: user.email });
    } catch (error) {
        console.log(error);
        const message = (error as Error).message;
        return res.status(500).json({ message: 'ERROR', cause: message });
    }
}

export const userLogin = async (
    req:Request, 
    res:Response, 
    next: NextFunction
) => {
    try {
        const { email, password } = req.body;

        // make sure THE USER EXISTS
        const user = await User.findOne({ email });
        if(!user) {
            return res.status(401).send('User not registered');
        }

        // COMPARE PASSWORD of the body with the hashed password of database.
        const isPasswordCorrect = await compare(password, user.password);
        if(!isPasswordCorrect) {
            return res.status(403).send("Incorrect password")
        }

        res.clearCookie(COOKIE_NAME, {
            domain: 'localhost',
            httpOnly: true,
            signed: true,
            path: '/'
        })

        const token = createToken(user._id.toString(), user.email, '7d')
        const expires = new Date();
        expires.setDate(expires.getDate() + 7);
        res.cookie(COOKIE_NAME, token, {
            path: '/',
            domain: 'localhost',
            expires,
            httpOnly: true,
            signed: true
        });

        return res.status(200).json({ message: "OK", name: user.name, email: user.email })
    } catch (error) {
        console.log(error);
        const message = (error as Error).message;
        return res.status(500).json({ message: 'ERROR', cause: message });
    }
}

export const verifyUser = async (
    req:Request, 
    res:Response, 
    next: NextFunction
) => {
    try {
        // user token check
        const user = await User.findById(res.locals.jwtData.id);
        if(!user) {
            return res.status(401).send('User not registered or token malfunctioned');
        }

        if(user._id.toString() !== res.locals.jwtData.id) {
            return res.status(401).send("Permissions didn't match");
        }

        return res.status(200).json({ message: "OK", name: user.name, email: user.email })
    } catch (error) {
        console.log(error);
        const message = (error as Error).message;
        return res.status(500).json({ message: 'ERROR', cause: message });
    }
}