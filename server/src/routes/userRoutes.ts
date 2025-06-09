import express, {RequestHandler} from 'express'
import {
    getUsers,
    getUserById,
    createUser,
    updateUser,
    deleteUser
} from '../controllers/userController'

const router = express.Router()

router.get('/', getUsers as RequestHandler)
router.get('/:id', getUserById as RequestHandler)
router.post('/', createUser as RequestHandler)
router.patch('/:id', updateUser as RequestHandler)
router.delete('/:id', deleteUser as RequestHandler)

export default router
