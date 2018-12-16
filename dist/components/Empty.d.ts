import React, { ReactElement, ReactNode } from 'react';
export interface ITitleProps {
    children: ReactNode;
    className?: string;
}
export interface ISubtitleProps {
    children?: ReactNode;
    className?: string;
}
interface IActionProps {
    children?: ReactNode;
}
export interface IEmptyProps {
    children?: ReactElement<any>;
    className?: string;
    icon?: string;
    title?: string;
    subtitle?: string;
    action?: ReactNode;
}
declare const Empty: {
    ({ children, className, icon, title, subtitle, action, ...props }: IEmptyProps): React.ReactElement<IEmptyProps>;
    defaultProps: {
        children: null;
        className: string;
        icon: string;
        title: null;
        subtitle: null;
    };
    Title: {
        ({ children, className, ...props }: ITitleProps): React.ReactElement<ITitleProps>;
        defaultProps: {
            className: string;
        };
    };
    Subtitle: {
        ({ children, className, ...props }: ISubtitleProps): React.ReactElement<ISubtitleProps>;
        defaultProps: {
            children: null;
            className: string;
        };
    };
    Action: ({ children }: IActionProps) => JSX.Element;
};
export default Empty;
