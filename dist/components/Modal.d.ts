import React, { MouseEvent, ReactNode } from 'react';
import noop from '../utilities/noop';
export interface IModalProps {
    active?: boolean;
    title?: string;
    content?: ReactNode;
    footer?: ReactNode;
    small?: boolean;
    large?: boolean;
    className?: string;
    onClearClick?: (e: MouseEvent<any>) => void;
}
declare const Modal: {
    ({ active, title, content, footer, small, large, className, onClearClick, ...props }: IModalProps): React.ReactElement<IModalProps>;
    defaultProps: {
        active: boolean;
        title: string;
        content: null;
        footer: null;
        small: boolean;
        large: boolean;
        onClearClick: typeof noop;
    };
};
export default Modal;
