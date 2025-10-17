import React from 'react';
import {Metadata} from "next";

export const metadata: Metadata = {
    title: 'UsersLayout metadata'
}
type Props = { children: React.ReactNode }
const PostsLayoutById = ({children}: Props) => {
    return (
        <>
            {children}
        </>
    );
};

export default PostsLayoutById;