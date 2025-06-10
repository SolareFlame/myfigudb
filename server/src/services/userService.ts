import {prisma} from '../prisma'

export const getAllUsers = () => {
    return prisma.user.findMany()
}

export const getUserById = (id: string) => {
    return prisma.user.findUnique({
        where: {id: id},
    })
}

export const getUserByHandle = (handle: string) => {
    return prisma.user.findUnique({
        where: {handle: handle},
    })
}

export const getUserByEmail = (email: string) => {
    return prisma.user.findUnique({
        where: {email: email},
    })
}

export const createUser = (data: { handle: string; email: string; password: string }) => {
    return prisma.user.create({
        data: {
            handle: data.handle,
            email: data.email,
            password: data.password,
        },
    });
}


