import User from '../models/User.js';
import bcryptjs from 'bcryptjs';
const { hash, compare } = bcryptjs;
export const getAllUsers = async (req, res, next) => {
    try {
        // get all users from database
        const users = await User.find({});
        return res.status(200).json({ message: "OK", users });
    }
    catch (error) {
        console.log(error);
        const message = error.message;
        return res.status(500).json({ message: "ERROR", cause: message });
    }
};
export const userSignup = async (req, res, next) => {
    try {
        const { name, email, password } = req.body;
        // USER SHOULD NOT EXIST, make sure the user does not exist
        // before creating the new user.
        const existingUser = await User.findOne({ email });
        if (existingUser)
            return res.status(401).send('User already registered');
        // encrypt the password and create a new user.
        // the user is saved in database with encrypted password.
        const hashedPassword = await hash(password, 10);
        const user = new User({ name, email, password: hashedPassword });
        await user.save();
        return res.status(201).json({ message: 'OK', id: user._id.toString() });
    }
    catch (error) {
        console.log(error);
        const message = error.message;
        return res.status(500).json({ message: 'ERROR', cause: message });
    }
};
export const userLogin = async (req, res, next) => {
    try {
        const { email, password } = req.body;
        // make sure THE USER EXISTS
        const user = await User.findOne({ email });
        if (!user) {
            return res.status(401).send('User not registered');
        }
        // COMPARE PASSWORD of the body with the hashed password of database.
        const isPasswordCorrect = await compare(password, user.password);
        if (!isPasswordCorrect) {
            return res.status(403).send("Incorrect password");
        }
        return res.status(200).json({ message: "OK", id: user._id.toString() });
    }
    catch (error) {
        console.log(error);
        const message = error.message;
        return res.status(500).json({ message: 'ERROR', cause: message });
    }
};
//# sourceMappingURL=user-controller.js.map