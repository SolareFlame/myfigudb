import { prisma } from '../prisma'

export const getFigureImages = (figure_id: string) => {
    return prisma.figureImage.findMany({
        where: { figure_id: figure_id },
    })
}
export const getFigureImage = (figure_id: string, image_path: string) => {
    return prisma.figureImage.findFirst({
        where: {
            figure_id: figure_id,
            image_path: image_path,
        },
    })
}

export const addFigureImage = (figure_id: string, image_path: string, size?: string, height?: number) => {
    return prisma.figureImage.create({
        data: {
            figure_id: figure_id,
            image_path: image_path,
            size: size,
            height: height,
        },
    })
}

export const deleteFigureImage = (figure_id: string, image_path: string) => {
    return prisma.figureImage.deleteMany({
        where: {
            figure_id: figure_id,
            image_path: image_path,
        },
    })
}

export const deleteFigureImages = (figure_id: string) => {
    return prisma.figureImage.deleteMany({
        where: {
            figure_id: figure_id,
        },
    })
}

export const updateFigureImage = (figure_id: string, image_path: string, size?: string, height?: number) => {
    return prisma.figureImage.update({
        where: {
            figure_id_image_path: {
                figure_id: figure_id,
                image_path: image_path,
            },
        },
        data: {
            size: size,
            height: height,
        },
    })
}
