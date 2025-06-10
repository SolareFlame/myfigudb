import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import {createUser, getUserByHandle} from '../services/userService';
import {Request, Response} from "express";

const SECRET = process.env.JWT_SECRET!

export const loginUser =  async (req: Request, res: Response) => {
    const { handle, password } = req.body;

    const user = await getUserByHandle(handle);
    if (!user) throw new Error('Invalid credentials');

    const valid = await bcrypt.compare(password, user.password);
    if (!valid) throw new Error('Invalid credentials');

    const token = jwt.sign({ id: user.id, handle: user.handle }, SECRET, {
        expiresIn: '1h'
    });

    res.json({ token, user: { id: user.id, handle: user.handle, email: user.email } });
};



export const registerUser = async (req: Request, res: Response) => {
    const { handle, email, password } = req.body;
    const hashed = await bcrypt.hash(password, 10);
    const user = await createUser({handle, email, password: hashed});

    if (!user) {
        return res.status(400).json({ message: 'Failed to create user' });
    }

    const token = jwt.sign({ id: user.id, handle: user.handle }, SECRET, {
        expiresIn: '1h'
    });

    res.status(201).json({ token, user: { id: user.id, handle: user.handle, email: user.email } });
};