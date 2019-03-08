import { ReactNode } from 'react';
import { BasePartProps, StyleProps } from '../../interfaces';
export interface PanelProps extends Partial<StyleProps> {
    header?: ReactNode;
    nav?: ReactNode;
    content?: ReactNode;
    footer?: ReactNode;
    headerClass?: string;
    children?: ReactNode;
}
export declare type PanelPartProps = Partial<BasePartProps>;
