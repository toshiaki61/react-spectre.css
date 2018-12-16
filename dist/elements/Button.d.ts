import { MouseEventHandler, ReactNode, ReactNodeArray } from 'react';
export interface IButtonProps {
    children?: ReactNode;
    className?: string;
    loading?: boolean;
    href?: string;
    lg?: boolean;
    sm?: boolean;
    block?: boolean;
    inputGroup?: boolean;
    primary?: boolean;
    clear?: boolean;
    link?: boolean;
    action?: boolean;
    circle?: boolean;
    onClick?: MouseEventHandler<Button>;
    tabIndex?: number;
    disabled?: boolean;
}
declare const Button: {
    ({ children, className, loading, href, lg, sm, block, inputGroup, primary, clear, link, action, circle, ...props }: IButtonProps): JSX.Element;
    Group: {
        ({ children, className, block }: IGroupProps): JSX.Element;
        defaultProps: {
            className: string;
            block: boolean;
        };
    };
};
export interface IGroupProps {
    children: ReactNodeArray;
    className?: string;
    block?: boolean;
}
export default Button;
