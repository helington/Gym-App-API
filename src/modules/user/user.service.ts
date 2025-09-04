import { UserModel } from "./user.model";

export const UserService = {
    getAllUsers: () => UserModel.findAll(),
    getUserById: async (id: number) => {
        const user = await UserModel.findUserById(id);

        if (!user) {
            throw new Error("User not found!");
        };

        return user;
    },
    createUser: async (name: string, email: string, password: string) => {
        const users = await UserModel.findAll()
        if (users.some(u => u.email === email)) {
            throw new Error("Email already in use!");
        }

        return UserModel.create({ name, email, password});
    }
}