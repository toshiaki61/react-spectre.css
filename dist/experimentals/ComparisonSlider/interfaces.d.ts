import { ReactNode } from 'react';
import { BasePartProps, StyleProps } from '../../interfaces';
export interface ComparisonImageProps extends Partial<StyleProps> {
    src: string;
    alt?: string;
}
export declare type ComparisonBeforeProps = Partial<BasePartProps>;
export declare type ComparisonAfterProps = Partial<BasePartProps>;
export declare type ComparisonLabelProps = Partial<BasePartProps>;
export interface ComparisonSliderAttrProps extends Partial<StyleProps> {
    before: ComparisonImageProps;
    after: ComparisonImageProps;
}
export interface ComparisonSliderChildrenProps extends Partial<StyleProps> {
    children: ReactNode;
}
export declare type ComparisonSliderProps = ComparisonSliderAttrProps | ComparisonSliderChildrenProps;
