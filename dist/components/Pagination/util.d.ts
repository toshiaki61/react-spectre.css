import { ReactNode } from 'react';
import { Page, PaginationChildrenProps, PaginationTitleProps } from './interfaces';
export declare function calculateStartAndEnd(current: number, total: number, each: number): {
    start: number;
    end: number;
};
export declare function pages(current: number, total: number, each?: number, skip?: ReactNode): Page[];
export declare function hasPaginationChildren(item: any): item is PaginationChildrenProps;
export declare function hasPaginationTitle(item: any): item is PaginationTitleProps;
