import * as figureService from '../services/figureService'
import { Request, Response } from 'express'
import {toFigureDTO} from "../dto/figure.dto";

/**
 * Get all figures from the database.
 *
 */
export const getFigures = async (req: Request, res: Response) => {
    const figures = await figureService.getAllFigures()
    res.json(figures)
}


/**
 * Get all figure data by its ID.
 */
export const getFigureById = async (req: Request, res: Response) => {
    const { id } = req.params
    const figure = await figureService.getFigureById(id)
    if (!figure) {
        return res.status(404).json({ message: 'Figure not found' })
    }
    res.json(toFigureDTO(figure))
}

/**
 * Create a new figure.
 */
export const createFigure = async (req: Request, res: Response) => {
    const { name, size, color, release_date } = req.body
    const newFigure = await figureService.addFigure({
        name,
        size,
        color,
        release_date: release_date ? new Date(release_date) : undefined
    })

    if (!newFigure) {
        return res.status(400).json({ message: 'Failed to create figure' })
    }

    res.status(201).json(newFigure)
}

/**
 * Update an existing figure by its ID.
 */
export const updateFigure = async (req: Request, res: Response) => {
    const { id } = req.params
    const { name, size, color, release_date } = req.body

    const updatedFigure = await figureService.editFigure(id, {
        name,
        size,
        color,
        release_date: release_date ? new Date(release_date) : undefined
    })

    if (!updatedFigure) {
        return res.status(204).send()
    }

    res.status(200).json(updatedFigure)
}

/**
 * Delete a figure by its ID.
 */
export const deleteFigure = async (req: Request, res: Response) => {
    const { id } = req.params
    const deletedFigure = await figureService.deleteFigure(id)
    if (!deletedFigure) {
        return res.status(404).json({ message: 'Figure not found' })
    }
    res.status(204).send()
}

