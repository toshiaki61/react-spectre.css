import React, { MouseEvent, ReactElement, ReactNode } from 'react';
import noop from '../utilities/noop';
export interface IItemProps {
    label: ReactNode;
    current: number;
    value: number;
    disabled?: boolean;
    onClick?: (e: MouseEvent<any>, value: number) => void;
}
export interface ITitleProps {
    title: string;
    subtitle: string;
    current: number;
    value: number;
    onClick: (e: MouseEvent<any>, value: number) => void;
}
export interface IPaginationProps {
    label?: {
        previous: string | ReactElement<any>;
        next: string | ReactElement<any>;
        skip: string | ReactElement<any>;
    };
    total: number;
    current: number;
    each?: number;
    title?: {
        prev: {
            title: string;
            subtitle: string;
        };
        next: {
            title: string;
            subtitle: string;
        };
    };
    onClick?: (e: MouseEvent<any>, page: number) => void;
}
declare const Pagination: {
    ({ label, current, total, each, title, onClick, }: IPaginationProps): React.ReactElement<IPaginationProps>;
    defaultProps: {
        label: {
            previous: string;
            next: string;
            skip: string;
        };
        total: number;
        current: number;
        each: number;
        title: undefined;
        onClick: typeof noop;
    };
};
export default Pagination;
