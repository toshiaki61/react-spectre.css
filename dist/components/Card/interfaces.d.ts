import { ReactElement, ReactNode } from 'react';
import { BasePartProps, StyleProps } from '../../interfaces';
export interface CardItemHeaderProps {
    button: ReactNode;
    title: ReactNode;
    subtitle: ReactNode;
}
export declare type CardType = 'image' | 'body' | 'footer' | 'header';
export interface CardItemProps {
    className?: string;
    type?: CardType;
    content?: CardItemHeaderProps | ReactNode;
}
export interface CardAttrProps extends Partial<StyleProps> {
    items: Array<CardItemProps & {
        id: string;
    }>;
}
export interface CardChildrenProps extends Partial<StyleProps> {
    children: ReactElement<CardItemProps> | Array<ReactElement<CardItemProps>>;
}
export declare type CardProps = CardAttrProps | CardChildrenProps;
export declare type CardPartProps = Partial<BasePartProps>;
