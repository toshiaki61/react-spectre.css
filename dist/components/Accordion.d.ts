import React, { ReactElement } from 'react';
import { IItemProps as IMenuItemProps } from './Menu';
export interface IItemProps {
    contents: IMenuItemProps[];
    className?: string;
    exclusive?: boolean;
    useIcon?: boolean;
    header: ReactElement<any> | string;
}
export interface IAccordionProps {
    menus: IItemProps[];
    className?: string;
    exclusive?: boolean;
    useIcon?: boolean;
}
declare const Accordion: {
    ({ menus, className, exclusive, useIcon, }: IAccordionProps): React.ReactElement<IAccordionProps>;
    defaultProps: {
        className: string;
        exclusive: boolean;
        useIcon: boolean;
    };
};
export default Accordion;
