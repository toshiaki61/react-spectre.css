/* @flow */
import React from 'react';

import Input from '../elements/form/Input';

export type SliderProps = {
  min: number,
  max: number,
  value: number,
};
const Slider = ({ min, max, value, ...props }: SliderProps) => (
  <Input slider min={min} max={max} defaultValue={value} data-tooltip={value} {...props} />
);
Slider.defaultProps = {
  min: 0,
  max: 100,
  value: undefined,
};

export default Slider;
