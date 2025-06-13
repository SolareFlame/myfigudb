import express, {RequestHandler} from 'express'
import {
    getFigures,
    getFigureById,
    createFigure,
    updateFigure,
    deleteFigure
} from '../controllers/figureController'

import {
    uploadFigureImage,
    getFigureImages,
    deleteFigureImage
} from '../controllers/figureImageController'

import {upload} from "../middlewares/imageMiddleware";

const router = express.Router()

router.get('/', getFigures as RequestHandler)
router.get('/:id', getFigureById as RequestHandler)

router.post('/', createFigure as RequestHandler);
router.patch('/:id', updateFigure as RequestHandler)
router.delete('/:id', deleteFigure as RequestHandler)


// IMAGES
router.post(
    '/:id/images',
    upload.single('image'),
    uploadFigureImage as RequestHandler
);
router.get('/:id/images', getFigureImages as RequestHandler);
router.delete('/:id/images/:imageId', deleteFigureImage as RequestHandler);

export default router
