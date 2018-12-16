import React, { ChangeEvent } from 'react';
export interface ItemProps {
    src: string;
    alt: string;
}
export interface ICarouselProps {
    slides: ItemProps[];
    active?: string;
    onChange: (e: ChangeEvent<HTMLInputElement>, id: string) => void;
}
declare const Carousel: {
    ({ slides, active, onChange, }: ICarouselProps): React.ReactElement<ICarouselProps> | null;
    defaultProps: {
        active: string;
    };
};
export default Carousel;
