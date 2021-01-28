import React from 'react';
export interface CardTestProps {
    data: {
        id: number;
        tileImage: string;
        viewReport: string;
        tileRouter: string;
    }[];
}
export declare const CardTest: React.FC<CardTestProps>;
