import { CSSProperties, ReactNode } from 'react';
export interface BarItemProps {
    small?: boolean;
    tooltip?: string;
    content?: ReactNode;
}
export interface ProgressBarItemProps extends BarItemProps {
    value?: string | number;
    role?: string;
    style?: CSSProperties;
    content?: ReactNode;
    'aria-valuenow'?: number;
    'aria-valuemin'?: number;
    'aria-valuemax'?: number;
}
export interface BarProps {
    className?: string;
    small?: boolean;
    slider?: boolean;
    items: ProgressBarItemProps[];
}
