import React, {FC} from 'react'

import cx from 'classnames'

import {SliderProps} from './interfaces'

const Slider: FC<SliderProps> = ({
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
