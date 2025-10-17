import { getAll } from "@/services/api.service";
import {Metadata} from "next";
import {IComment} from "@/models/IComment";

export const metadata: Metadata = {
    title: 'UsersLayout metadata'
}

export default async function PostsPage() {
    const comments = await getAll<IComment[]>("/posts");
    return (
        <>
            <h1>Comments</h1>
            <hr/>
            <ul>
                {comments.map((comment) => (
                    <li key={comment.id}>
                        <h3>{comment.email}</h3>
                        <p>{comment.name}</p>
                        <p>{comment.body}</p>
                    </li>
                ))}
            </ul>
        </>
    );
}