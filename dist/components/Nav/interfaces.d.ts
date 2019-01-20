import { MouseEvent, ReactNode } from 'react';
import { StyleProps } from 'src/interfaces';
export interface NavItemProps {
    id: string;
    name: string;
    onClick?: (e: MouseEvent<any>, id: string) => void;
    active?: boolean;
    items?: NavItemProps[];
    className?: string;
}
export interface NavAttrProps extends Partial<StyleProps> {
    items: NavItemProps[];
    activeId?: string;
    onClick?: (e: MouseEvent<any>, id: string) => void;
}
export interface NavChildrenProps extends Partial<StyleProps> {
    children: ReactNode;
}
export declare type NavProps = NavAttrProps | NavChildrenProps;
