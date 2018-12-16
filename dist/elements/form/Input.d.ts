import React, { ChangeEvent, ReactElement } from 'react';
export interface IBaseInputProps {
    className?: string;
    success?: boolean;
    danger?: boolean;
    sm?: boolean;
    lg?: boolean;
    textarea?: boolean;
    slider?: boolean;
    id?: string;
    label?: string;
    min?: number;
    max?: number;
    value?: any;
    onChange?: (e: ChangeEvent<any>) => void;
}
declare const Input: {
    ({ label, id, ...props }: IBaseInputProps): React.ReactElement<IBaseInputProps>;
    defaultProps: {
        className: string;
        success: boolean;
        danger: boolean;
        sm: boolean;
        lg: boolean;
        textarea: boolean;
        label: string;
        id: string;
    };
    Group: {
        ({ children, className, success, danger, ...props }: IGroupProps): React.ReactElement<IGroupProps>;
        defaultProps: {
            className: string;
            success: boolean;
            danger: boolean;
        };
    };
    Addon: {
        ({ children, className, sm, lg, ...props }: IAddonProps): React.ReactElement<IAddonProps>;
        defaultProps: {
            className: string;
            sm: boolean;
            lg: boolean;
        };
    };
};
export interface IGroupProps {
    children: ReactElement<any>;
    className?: string;
    success?: boolean;
    danger?: boolean;
}
export interface IAddonProps {
    children: ReactElement<any>;
    className?: string;
    sm?: boolean;
    lg?: boolean;
}
export default Input;
