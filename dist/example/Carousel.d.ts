import { Component } from 'react';
interface ICarouselProps {
    slides: Array<{
        src: string;
        alt: string;
    }>;
}
interface ICarouselExampleState {
    active: string;
}
declare class CarouselExample extends Component<ICarouselProps, ICarouselExampleState> {
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
