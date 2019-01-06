import React, {SFC} from 'react'

import {MeterProps} from './interfaces'

const Meter: SFC<MeterProps> = ({value, ...props}) => (
  <meter className="meter" value={value} {...props} />
)
Meter.defaultProps = {
  min: 0,
  max: 100,
}

export default Meter
