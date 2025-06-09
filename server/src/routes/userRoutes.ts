import express, {RequestHandler} from 'express'
import {
    getUserById,
} from '../controllers/userController'

const router = express.Router()

//router.get('/', getUsers as RequestHandler)
router.get('/:id', getUserById as RequestHandler)

export default router
