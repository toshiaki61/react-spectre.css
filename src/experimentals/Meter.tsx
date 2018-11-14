import React, {ReactElement} from 'react'

export interface IMeterProps {
  value: number
  optimum?: number
  min?: number
  max?: number
  low?: number
  high?: number
}
const Meter = ({value, ...props}: IMeterProps): ReactElement<IMeterProps> => (
  <meter className="meter" value={value} {...props} />
)
Meter.defaultProps = {
  min: 0,
  max: 100,
}
export default Meter
