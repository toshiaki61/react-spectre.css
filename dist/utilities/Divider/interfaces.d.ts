import { CSSProperties, ReactNode } from 'react';
export interface DividerProps {
    children?: ReactNode;
    content?: string;
    vertical?: boolean;
    li?: boolean;
    center?: boolean;
    className?: string;
    style?: CSSProperties;
}
