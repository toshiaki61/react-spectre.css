import React, { ReactElement, ReactNode, ReactNodeArray } from 'react';
export interface IFormProps {
    children: ReactElement<any>;
    className?: string;
    horizontal?: boolean;
}
declare const Form: {
    ({ children, className, horizontal, ...props }: IFormProps): React.ReactElement<IFormProps>;
    defaultProps: {
        className: string;
        horizontal: boolean;
    };
    Group: {
        ({ children, className, success, danger, ...props }: IGroupProps): React.ReactElement<IGroupProps>;
        defaultProps: {
            className: string;
            success: boolean;
            danger: boolean;
        };
    };
    Label: {
        ({ children, className, htmlFor, ...props }: ILabelProps): JSX.Element;
        defaultProps: {
            className: string;
            htmlFor: string;
        };
    };
};
export interface IGroupProps {
    children: ReactNode | ReactNodeArray;
    className?: string;
    success?: boolean;
    danger?: boolean;
}
export interface ILabelProps {
    children: ReactNode;
    className?: string;
    htmlFor?: string;
}
export default Form;
