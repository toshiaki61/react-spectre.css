import { ReactElement } from 'react';
export interface ILabelProps {
    children: ReactElement<any>;
    className?: string;
    rounded?: boolean;
    primary?: boolean;
    secondary?: boolean;
    success?: boolean;
    warning?: boolean;
    error?: boolean;
}
declare const Label: {
    ({ children, className, rounded, primary, secondary, success, warning, error, ...props }: ILabelProps): JSX.Element;
    defaultProps: {
        className: string;
        rounded: boolean;
        primary: boolean;
        secondary: boolean;
        success: boolean;
        warning: boolean;
        error: boolean;
    };
};
export default Label;
