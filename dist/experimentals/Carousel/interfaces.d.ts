import { ChangeEvent, ChangeEventHandler, ReactNode } from 'react';
import { BasePartProps } from '../../interfaces';
export declare type ChangeEventIdHandler = (e: ChangeEvent<HTMLInputElement>, id: string) => void;
export interface CarouselItemProps {
    src: string;
    alt: string;
}
export interface CarouselAttrProps {
    slides: CarouselItemProps[];
    activeId?: string;
    onChange: ChangeEventIdHandler;
}
export interface CarouselChildrenProps {
    children: ReactNode;
}
export declare type CarouselProps = CarouselAttrProps | CarouselChildrenProps;
export interface CarouselLocatorProps {
    id: string;
    checked: boolean;
    onChange: ChangeEventHandler<HTMLInputElement>;
}
export interface CarouselItemPaging {
    prev: number;
    next: number;
}
export declare type CarouselContainerProps = Partial<BasePartProps>;
export declare type CarouselNavProps = Partial<BasePartProps>;
export declare type CarouselNavItemProps = Partial<BasePartProps> & {
    id: string;
};
