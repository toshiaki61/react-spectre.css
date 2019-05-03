import * as React from 'react'

import cx from 'clsx'

import {SliderProps} from './interfaces'

const Slider: React.FC<SliderProps> = ({
  min,
  max,
  value,
  tooltip,
  onChange,
  ...props
}) => (
  <input
    type="range"
    className={cx('slider', {tooltip})}
    min={min}
    max={max}
    value={value}
    onChange={onChange}
    {...props}
  />
)
Slider.defaultProps = {min: 0, max: 100}

export default Slider
