/* @flow */
import * as React from 'react';

import Input from '../elements/form/Input';

export type SliderProps = {
  min: number,
  max: number,
  value: number,
};
const Slider = ({ min, max, value, ...props }: SliderProps): React.Element<*> => (
  <Input slider min={min} max={max} defaultValue={value} data-tooltip={value} {...props} />
);
Slider.defaultProps = {};

export default Slider;
