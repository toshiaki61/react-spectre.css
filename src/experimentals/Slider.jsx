/* @flow */
import * as React from 'react'

import Input from '../elements/form/Input'

export type SliderProps = {
  min: number,
  max: number,
  value: number,
  onChange: e => void,
}
const Slider = ({
  min,
  max,
  value,
  onChange,
  ...props
}: SliderProps): React.Element<*> => (
  <Input
    slider
    min={min}
    max={max}
    value={value}
    onChange={onChange}
    data-tooltip={value}
    {...props}
  />
)
Slider.defaultProps = {min: 0, max: 100}

export default Slider
