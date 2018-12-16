import React, { ReactElement } from 'react';
export interface IColumnProps {
    children: ReactElement<any>;
    className?: string;
    xs?: number;
    sm?: number;
    md?: number;
    lg?: number;
    xl?: number;
    size?: number;
}
declare const Column: {
    ({ children, className, xs, sm, md, lg, xl, size, ...props }: IColumnProps): React.ReactElement<IColumnProps>;
    defaultProps: {
        className: string;
        xs: number;
        sm: number;
        md: number;
        lg: number;
        xl: number;
        size: number;
    };
};
export default Column;
