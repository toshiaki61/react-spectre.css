import React, {ReactElement, ChangeEvent} from 'react'

import Input, {BaseInputProps} from '../elements/form/Input'

export interface SliderProps {
  min?: number
  max?: number
  value?: number
  onChange: (e: ChangeEvent<BaseInputProps>) => void
}
const Slider = ({
  min,
  max,
  value,
  onChange,
  ...props
}: SliderProps): ReactElement<SliderProps> => (
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
