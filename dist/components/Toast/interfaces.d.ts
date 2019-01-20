import { MouseEventHandler, ReactNode } from 'react';
import { StyleProps } from '../../interfaces';
export declare type ToastColorType = 'primary' | 'success' | 'warning' | 'error';
export interface ToastBaseProps extends Partial<StyleProps> {
    color?: ToastColorType;
}
export interface ToastAttrProps extends ToastBaseProps {
    content: ReactNode;
    title?: ReactNode;
    onClearClick?: MouseEventHandler;
}
export interface ToastChildrenProps extends ToastBaseProps {
    children: ReactNode;
}
export declare type ToastProps = ToastAttrProps | ToastChildrenProps;
