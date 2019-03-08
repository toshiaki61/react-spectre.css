import { ReactNode } from 'react';
import { StyleProps } from 'src/interfaces';
export declare type ContainerGridSizeType = 'xs' | 'sm' | 'md' | 'lg' | 'xl';
export interface ContainerProps extends Partial<StyleProps> {
    children: ReactNode;
    size?: ContainerGridSizeType;
}
