import * as React from 'react'

import {MeterProps} from './interfaces'

const Meter: React.FC<MeterProps> = ({value, ...props}) => (
  <meter className="meter" value={value} {...props} />
)
Meter.defaultProps = {
  min: 0,
  max: 100,
}

export default Meter
