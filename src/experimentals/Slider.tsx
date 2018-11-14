import React, {ChangeEvent, ReactElement} from 'react'

import Input, {IBaseInputProps} from '../elements/form/Input'

export interface ISliderProps {
  min?: number
  max?: number
  value?: number
  onChange: (e: ChangeEvent<IBaseInputProps>) => void
}
const Slider = ({
  min,
  max,
  value,
  onChange,
  ...props
}: ISliderProps): ReactElement<ISliderProps> => (
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
