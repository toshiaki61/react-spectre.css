import React, { ReactElement } from 'react';
export interface IItemHeaderProps {
    button: ReactElement<any>;
    title: ReactElement<any>;
    subtitle: ReactElement<any>;
}
export interface IItemProps {
    type?: 'image' | 'body' | 'footer' | 'header';
    content?: IItemHeaderProps | ReactElement<any> | string | any;
}
export interface ICardProps {
    items: IItemProps[];
}
declare const Card: ({ items }: ICardProps) => React.ReactElement<ICardProps>;
export default Card;
