import React, { MouseEvent, ReactNode } from 'react';
export interface IToastProps {
    title?: ReactNode;
    content: ReactNode;
    className?: string;
    onClearClick?: (e: MouseEvent<any>) => void;
    primary?: boolean;
    success?: boolean;
    warning?: boolean;
    error?: boolean;
}
declare const Toast: {
    ({ title, content, className, onClearClick, primary, success, warning, error, ...props }: IToastProps): React.ReactElement<IToastProps>;
    defaultProps: {
        title: string;
        className: string;
        onClearClick: undefined;
        primary: boolean;
        success: boolean;
        warning: boolean;
        error: boolean;
    };
};
export default Toast;
