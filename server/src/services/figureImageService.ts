import { prisma } from '../prisma'

export const getFigureImages = (figure_id: string) => {
    return prisma.figureImage.findMany({
        where: { figure_id: figure_id },
    })
}
export const getFigureImage = (figure_id: string, key: string) => {
    return prisma.figureImage.findFirst({
        where: {
            figure_id: figure_id,
            key: key,
        },
    })
}

export const addFigureImage = (figure_id: string, key: string, size?: string, height?: number) => {
    return prisma.figureImage.create({
        data: {
            figure_id: figure_id,
            key: key,
            size: size,
            height: height,
        },
    })
}

export const deleteFigureImage = (figure_id: string, key: string) => {
    return prisma.figureImage.deleteMany({
        where: {
            figure_id: figure_id,
            key: key,
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

export const updateFigureImage = (figure_id: string, key: string, size?: string, height?: number) => {
    return prisma.figureImage.update({
        where: {
            figure_id_key: {
                figure_id: figure_id,
                key: key,
            },
        },
        data: {
            size: size,
            height: height,
        },
    })
}
