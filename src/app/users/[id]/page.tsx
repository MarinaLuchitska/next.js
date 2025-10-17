import { Metadata } from "next";
import { getAll } from "@/services/api.service";
import type { IUser } from "@/models/IUser";

type Props = {
    params: { id: string };
};

// --- Динамічна metadata ---
export const generateMetadata = async ({ params }: Props): Promise<Metadata> => {
    return {
        title: "User page " + params.id,
    };
};

export default async function UserPage({ params }: Props) {
    const u = await getAll<IUser>(`/users/${params.id}`);
    return (
        <>
            <h1>{u.name}</h1>
            <p>Email: {u.email}</p>
            <p>Phone: {u.phone}</p>
            <p>Website: {u.website}</p>
        </>
    );
}