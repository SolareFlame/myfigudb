import { Request, Response } from 'express';
import * as figureImageService from '../services/figureImageService';
import { s3client, BUCKET_NAME } from '../s3client';
import { PutObjectCommand } from '@aws-sdk/client-s3';
import path from 'path';


export const uploadFigureImage = async (req: Request, res: Response) => {
    const figureId = req.params.id;
    const file = req.file;

    if (!file) return res.status(400).json({ message: 'No file uploaded' });

    const ext = path.extname(file.originalname);
    const key = `figures/${figureId}/${Date.now()}${ext}`;

    const command = new PutObjectCommand({
        Bucket: BUCKET_NAME,
        Key: key,
        Body: file.buffer,
        ContentType: file.mimetype,
    });

    await s3client.send(command);

    const publicUrl = `${process.env.S3_PUBLIC_URL}/${BUCKET_NAME}/${key}`;
    await figureImageService.addFigureImage(figureId, key, file.size.toString(), file.buffer.length);


    res.json({ url: publicUrl });
};

export const getFigureImages = async (req: Request, res: Response) => {
    const { id } = req.params;

    const images = await figureImageService.getFigureImages(id);
    res.status(200).json(images);
}

export const deleteFigureImage = async (req: Request, res: Response) => {
    const { id, key } = req.params;

    const final_key = `figures/${id}/${key}`;
    const command = new PutObjectCommand({
        Bucket: BUCKET_NAME,
        Key: final_key,
    });

    await s3client.send(command);

    await figureImageService.deleteFigureImage(id, key);

    res.status(204).send();
}

export const deleteFigureImages = async (req: Request, res: Response) => {
    const { id } = req.params;

    const images = await figureImageService.getFigureImages(id);
    if (!images || images.length === 0) {
        return res.status(404).json({ message: 'No images found for this figure' });
    }

    for (const image of images) {
        const key = `figures/${id}/${image.key}`;
        const command = new PutObjectCommand({
            Bucket: BUCKET_NAME,
            Key: key,
        });
        await s3client.send(command);
    }

    await figureImageService.deleteFigureImages(id);

    res.status(204).send();
}