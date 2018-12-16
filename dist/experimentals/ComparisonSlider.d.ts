import React, { CSSProperties } from 'react';
export interface ImageProps {
    src: string;
    alt?: string;
    className?: string;
    style?: CSSProperties;
}
export interface IComparisonSliderProps {
    before: ImageProps;
    after: ImageProps;
}
declare const ComparisonSlider: ({ before, after, }: IComparisonSliderProps) => React.ReactElement<IComparisonSliderProps>;
export default ComparisonSlider;
