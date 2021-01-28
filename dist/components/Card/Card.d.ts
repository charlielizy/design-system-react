import React from 'react';
export interface CardProps {
    data: {
        tileImage: string;
        viewReport: string;
        tileRouter: string;
    }[];
}
export declare const Card: React.FC<CardProps>;
