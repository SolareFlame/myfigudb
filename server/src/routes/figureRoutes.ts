import express, {RequestHandler} from 'express'
import {
    getFigures,
    getFigureById,
    createFigure,
    updateFigure,
    deleteFigure
} from '../controllers/figureController'

import {
    addFigureImage,
    getFigureImages,
} from '../controllers/figureImageController'

import {authMiddleware} from "../middlewares/authMiddleware";
import {upload} from "../middlewares/imageMiddleware";

const router = express.Router()

router.get('/', getFigures)

router.get('/', getFigures as RequestHandler)
router.get('/:id', getFigureById as RequestHandler)

//router.post('/', authMiddleware(['admin']), createFigure as RequestHandler);
router.post('/', createFigure as RequestHandler);
router.patch('/:id', updateFigure as RequestHandler)
router.delete('/:id', deleteFigure as RequestHandler)


// IMAGES
router.post(
    '/:id/images',
    upload.single('image'),
    addFigureImage as RequestHandler
);
router.get('/:id/images', getFigureImages as RequestHandler);


/*
router.get('/:id/images', getFigureImages)
router.post('/:id/images', addFigureImage)
router.delete('/:id/images/:imageId', deleteFigureImage)
*/

export default router
