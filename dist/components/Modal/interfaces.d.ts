import { MouseEventHandler, ReactNode } from 'react';
import { BasePartProps, StyleProps } from '../../interfaces';
export declare type ModalSizeType = 'sm' | 'lg';
export interface ModalBaseProps extends Partial<StyleProps> {
    active: boolean;
    size: ModalSizeType;
}
export interface ModalAttrProps extends Partial<ModalBaseProps> {
    content: ReactNode;
    onClearClick: MouseEventHandler;
    title?: string;
    footer?: ReactNode;
}
export interface ModalChildrenProps extends Partial<ModalBaseProps> {
    children: ReactNode;
}
export declare type ModalProps = ModalAttrProps | ModalChildrenProps;
export declare type ModalPartProps = Partial<BasePartProps>;
export interface ModalCloseable {
    onClearClick?: MouseEventHandler;
}
