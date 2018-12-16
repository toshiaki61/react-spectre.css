import React, { MouseEvent, ReactElement, ReactNode } from 'react';
export interface IBadgeProps {
    content?: string | number | ReactElement<any>;
}
export interface IItemProps {
    id?: string;
    link?: string;
    content?: ReactNode;
    className?: string;
    divider?: boolean | string;
    active?: boolean;
    badge?: number;
    onClick?: (e: MouseEvent<any>, id: string) => void;
}
export interface IMenuProps {
    className?: string;
    nav?: boolean;
    contents: IItemProps[];
    onClick?: (e: MouseEvent<any>, id: string) => void;
}
declare const Menu: {
    ({ className, nav, contents, onClick, ...props }: IMenuProps): React.ReactElement<IMenuProps>;
    defaultProps: {
        className: string;
        nav: boolean;
    };
};
export default Menu;
