import React, { ReactElement, ReactNode, ReactNodeArray } from 'react';
export interface ISectionProps {
    children?: ReactNode | ReactNodeArray;
    className?: string;
    center?: boolean;
}
export interface INavbarWithoutContainerProps {
    children: ReactNode | ReactNodeArray;
    className?: string;
}
export interface INavbarProps {
    children: ReactNode | ReactNodeArray;
    container?: boolean | string | {
        className?: string;
        xs?: boolean;
        sm?: boolean;
        md?: boolean;
        lg?: boolean;
        xl?: boolean;
    };
}
declare const Navbar: {
    ({ children, container, ...props }: INavbarProps): React.ReactElement<INavbarProps>;
    defaultProps: {
        container: boolean;
    };
    Brand: {
        ({ children, className, ...props }: IBrandProps): React.ReactElement<IBrandProps>;
        defaultProps: {
            className: string;
            href: string;
        };
    };
    Section: {
        ({ children, className, center, ...props }: ISectionProps): React.ReactElement<ISectionProps>;
        defaultProps: {
            children: null;
            className: string;
            center: boolean;
        };
    };
};
export interface IBrandProps {
    children: ReactElement<any>;
    className?: string;
    href?: string;
}
export default Navbar;
