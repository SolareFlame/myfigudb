import express, {RequestHandler} from 'express'
import {
    getFigures,
    getFigureById,
    createFigure,
    updateFigure,
    deleteFigure
} from '../controllers/figureController'

const router = express.Router()

router.get('/', getFigures)

router.get('/', getFigures as RequestHandler)
router.get('/:id', getFigureById as RequestHandler)
router.post('/', createFigure as RequestHandler)
router.patch('/:id', updateFigure as RequestHandler)
router.delete('/:id', deleteFigure as RequestHandler)

/*
router.get('/:id/images', getFigureImages)
router.post('/:id/images', addFigureImage)
router.delete('/:id/images/:imageId', deleteFigureImage)
*/

export default router
