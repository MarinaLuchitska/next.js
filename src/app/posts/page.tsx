import { getAll } from "@/services/api.service";
import {Metadata} from "next";
import {IPost} from "@/models/IPost";

export const metadata: Metadata = {
    title: 'UsersLayout metadata'
}

export default async function PostsPage() {
    const posts = await getAll<IPost[]>("/posts");
    return (
        <>
            <h1>Posts</h1>
            <hr/>
            <ul>
                {posts.map((post) => (
                    <li key={post.id}>
                        <h3>{post.title}</h3>
                        <p>{post.userId}</p>
                        <p>{post.body}</p>
                    </li>
                ))}
            </ul>
        </>
    );
}