import React, {ReactElement} from 'react'

export interface MeterProps {
  value: number
  optimum?: number
  min?: number
  max?: number
  low?: number
  high?: number
}
const Meter = ({value, ...props}: MeterProps): ReactElement<MeterProps> => (
  <meter className="meter" value={value} {...props} />
)
Meter.defaultProps = {
  min: 0,
  max: 100,
}
export default Meter
