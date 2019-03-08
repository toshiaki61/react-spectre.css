import { Component } from 'react';
interface CarouselProps {
    slides: Array<{
        src: string;
        alt: string;
    }>;
}
interface ICarouselExampleState {
    active: string;
}
declare class CarouselExample extends Component<CarouselProps, ICarouselExampleState> {
    static defaultProps: {
        slides: {
            src: string;
            alt: string;
        }[];
    };
    state: {
        active: string;
    };
    render(): JSX.Element | null;
    private onChange;
}
export default CarouselExample;
