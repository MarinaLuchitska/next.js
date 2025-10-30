import React from 'react';
import {Metadata} from "next";

export const metadata: Metadata = {
    title: 'CarsLayout metadata'
}
type Props = { children: React.ReactNode }
const CarsLayout = ({children}: Props) => {
    return (
        <>
            {children}
        </>
    );
};

export default CarsLayout;