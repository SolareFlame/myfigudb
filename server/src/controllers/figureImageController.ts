import { Request, Response } from 'express';
import * as figureImageService from '../services/figureImageService';

export const addFigureImage = async (req: Request, res: Response) => {
    const { id } = req.params;
    const file = req.file;

    if (!file) {
        return res.status(400).json({ error: 'Image file is required' });
    }

    const image = await figureImageService.addFigureImage(id, file.path);
    res.status(201).json(image);
};

export const getFigureImages = async (req: Request, res: Response) => {
    const { id } = req.params;

    const images = await figureImageService.getFigureImages(id);
    res.status(200).json(images);
}