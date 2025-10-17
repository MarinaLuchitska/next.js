import { getAll } from "@/services/api.service";
import type { IUser } from "@/models/IUser";
import {Metadata} from "next";

export const metadata: Metadata = {
    title: 'UsersLayout metadata'
}

export default async function UsersPage() {
    const users = await getAll<IUser[]>("/users");
    return (
        <>
            <h1>Users</h1>
            <hr/>
            <ul>
                {users.map((user) => (
                    <li key={user.id}>
                        <h3>{user.name}</h3>
                        <p>{user.email}</p>
                        <p>{user.phone}</p>
                    </li>
                ))}
            </ul>
        </>
    );
}