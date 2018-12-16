import React, { ReactElement } from 'react';
export interface IContainerProps {
    children: ReactElement<any>;
    className?: string;
    xs?: boolean;
    sm?: boolean;
    md?: boolean;
    lg?: boolean;
    xl?: boolean;
}
declare const Container: {
    ({ children, className, xs, sm, md, lg, xl, ...props }: IContainerProps): React.ReactElement<IContainerProps>;
    defaultProps: {
        className: string;
        xs: boolean;
        sm: boolean;
        md: boolean;
        lg: boolean;
        xl: boolean;
    };
};
export default Container;
