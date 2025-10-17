import { Metadata } from "next";
import { getAll } from "@/services/api.service";
import {IPost} from "@/models/IPost";

type Props = {
    params: { id: string };
};

export const generateMetadata = async ({ params }: Props): Promise<Metadata> => {
    return {
        title: "Post page " + params.id,
    };
};

export default async function UserPage({ params }: Props) {
    const post = await getAll<IPost>(`/posts/${params.id}`);
    return (
        <>
            <li key={post.id}>
                <h3>{post.title}</h3>
                <p>{post.userId}</p>
                <p>{post.body}</p>
            </li>
        </>
    );
}