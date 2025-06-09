import * as userService from '../services/userService'
import {Request, Response} from 'express'

/**
 * Get a user by their ID.
 */
export const getUserById = async (req: Request, res: Response) => {
    const {id} = req.params
    const raw_user = await userService.getUserById(id)
    if (!raw_user) {
        return res.status(404).json({message: 'User not found'})
    }

    const {password, email, ...user} = raw_user
    res.json(user)
}