import { Metadata } from "next";
import { getAll } from "@/services/api.service";
import {IComment} from "@/models/IComment";


type Props = {
    params: { id: string };
};

export const generateMetadata = async ({ params }: Props): Promise<Metadata> => {
    return {
        title: "Comment page " + params.id,
    };
};

export default async function UserPage({ params }: Props) {
    const comment = await getAll<IComment>(`/comments/${params.id}`);
    return (
        <>
            <li key={comment.id}>
                <h3>{comment.email}</h3>
                <p>{comment.name}</p>
                <p>{comment.body}</p>
            </li>
        </>
    );
}