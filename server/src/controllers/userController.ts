import * as userService from '../services/userService'
import {Request, Response} from 'express'

/**
 * Get all users from the database.
 */
export const getUsers = async (req: Request, res: Response) => {
    const raw_users = await userService.getAllUsers()

    if (!raw_users || raw_users.length === 0) {
        return res.status(404).json({message: 'No users found'})
    }

    const users = raw_users.map(({password, email, ...user}) => user)
    res.json(users)
}

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

/**
 * Create a new user.
 */
export const createUser = async (req: Request, res: Response) => {
    const {name, email, password, username} = req.body

    const newUser = await userService.addUser({
        name,
        email,
        password,
        username: username || name,
    })

    if (!newUser) {
        return res.status(400).json({message: 'Error creating user'})
    }

    res.status(201).json(newUser)
}

/**
 * Update an existing user by their ID.
 */
export const updateUser = async (req: Request, res: Response) => {
    const {id} = req.params
    const {name, email, password, username} = req.body

    const updatedUser = await userService.editUser(id, {
        name,
        email,
        password,
        username
    })

    if (!updatedUser) {
        return res.status(204).send()
    }

    res.json(updatedUser)
}

/**
 * Delete a user by their ID.
 */
export const deleteUser = async (req: Request, res: Response) => {
    const {id} = req.params
    const deletedUser = await userService.deleteUser(id)

    if (!deletedUser) {
        return res.status(404).json({message: 'User not found'})
    }

    res.status(204).send()
}
