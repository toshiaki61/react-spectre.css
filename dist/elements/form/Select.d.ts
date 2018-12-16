import React, { ReactNode, ReactNodeArray } from 'react';
export interface ISelectOnlyProps {
    children?: ReactNode | ReactNodeArray;
    className?: string;
    sm?: boolean;
    lg?: boolean;
}
interface ISelectProps extends ISelectOnlyProps {
    label?: string;
    options: {
        key: string;
    };
}
declare const Select: {
    ({ children, label, options, ...props }: ISelectProps): React.ReactElement<ISelectProps>;
    defaultProps: {
        label: string;
        options: {};
    };
};
export default Select;
