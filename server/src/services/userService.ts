import {prisma} from '../prisma'
import {hash} from "bcryptjs";
import {PrismaClientKnownRequestError} from '@prisma/client/runtime/library';


export const getAllUsers = () => {
    return prisma.user.findMany()
}

export const getUserById = (id: string) => {
    return prisma.user.findUnique({
        where: {id: id},
    })
}

export const addUser = async (data: {
    name: string
    email: string
    password: string
    username: string
}) => {
    const hashedPassword = await hash(data.password, 10)

    return prisma.user.create({
        data: {
            name: data.name,
            email: data.email,
            password: hashedPassword,
            username: data.username,
        },
    });
}

export const editUser = async (id: string, data: {
    name?: string
    email?: string
    password?: string
    username?: string
}) => {
    const updateData: any = {}

    if (data.name) updateData.name = data.name
    if (data.email) updateData.email = data.email
    if (data.password) updateData.password = await hash(data.password, 10)
    if (data.username) updateData.username = data.username

    return prisma.user.update({
        where: {id: id},
        data: updateData,
    })
}

export const deleteUser = (id: string) => {
    return prisma.user.delete({
        where: {id: id},
    })
}