import { ReactNode, ReactNodeArray } from 'react';
import { BasePartProps, StyleProps } from '../../interfaces';
export interface TileBaseProps extends Partial<StyleProps> {
    compact?: boolean;
}
export interface TileAttrProps extends TileBaseProps {
    content: ReactNode | ReactNodeArray;
    title?: ReactNode;
    subtitle?: ReactNode;
    icon?: ReactNode;
    action?: ReactNode;
}
export interface TileChildrenProps extends TileBaseProps {
    children: ReactNode;
}
export declare type TileProps = TileAttrProps | TileChildrenProps;
export declare type TilePartProps = Partial<BasePartProps>;
