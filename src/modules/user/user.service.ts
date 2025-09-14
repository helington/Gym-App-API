import bcrypt from "bcrypt";

import { UserModel } from "./user.model";
import { CreateUserInput, UpdateUserInput } from "./user.schemas";


export const UserService = {
    getAllUsers: () => UserModel.findAll(),
    getUserById: async (id: number) => {
        const user = await UserModel.findUserById(id);
        if (!user) {
            throw new Error("User not found!");
        };

        return user;
    },
    createUser: async (data: CreateUserInput) => {
        const email = data.email;
        const users = await UserModel.findAll();

        if (users.some(u => u.email === email)) {
            throw new Error("Email already in use!");
        }

        data.password = await bcrypt.hash(data.password, 10);
        return UserModel.create(data);
    },
    updateUser: async (currentUserId: number, userId: number, dataToUpdate: UpdateUserInput["body"]) => {
        if (currentUserId != userId) {
            throw new Error ("Unauthorized to update this user!");
        };

        if (dataToUpdate.password !== undefined) {
            dataToUpdate.password = await bcrypt.hash(dataToUpdate.password, 10);
        };

        const updatedUser = await UserModel.update(userId, dataToUpdate);
        if (!updatedUser) {
            throw new Error ("User not found!");
        };

        return updatedUser;
    },
    deleteUser: async (currentUserId: number, userId: number) => {
        if (currentUserId != userId) {
            throw new Error ("Unauthorized to update this user!");
        };

        const deletedUser = await UserModel.delete(userId);
        if (!deletedUser) {
            throw new Error ("User not found!");
        };

        return deletedUser;
    }

}