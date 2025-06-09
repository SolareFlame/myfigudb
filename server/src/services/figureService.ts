import { prisma } from '../prisma'

export const getAllFigures = () => {
    return prisma.figure.findMany()
}

export const getFigureById = (id: string) => {
    return prisma.figure.findUnique({
        where: { id: id },
    })
}

export const addFigure = (data: {name: string, size?: string, color?: string, release_date?: Date}) => {
    return prisma.figure.create({
        data: {
            name: data.name,
            size: data.size,
            color: data.color,
            release_date: data.release_date,
        },
    })
}

export const editFigure = (id: string, data: {name?: string, size?: string, color?: string, release_date?: Date}) => {
    return prisma.figure.update({
        where: { id: id },
        data: {
            name: data.name,
            size: data.size,
            color: data.color,
            release_date: data.release_date,
        },
    })
}

export const deleteFigure = (id: string) => {
    return prisma.figure.delete({
        where: { id: id },
    })
}

export const searchFigures = (parameter : string, query: string) => {
    return prisma.figure.findMany({
        where: {
            [parameter]: {
                contains: query,
                mode: 'insensitive',
            },
        },
    });
}