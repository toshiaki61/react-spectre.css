import React, { ChangeEvent } from 'react';
import { IBaseInputProps } from '../elements/form/Input';
export interface ISliderProps {
    min?: number;
    max?: number;
    value?: number;
    onChange: (e: ChangeEvent<IBaseInputProps>) => void;
}
declare const Slider: {
    ({ min, max, value, onChange, ...props }: ISliderProps): React.ReactElement<ISliderProps>;
    defaultProps: {
        min: number;
        max: number;
    };
};
export default Slider;
