import React, {ReactElement} from 'react'

import {MeterProps} from './interfaces'

const Meter = ({value, ...props}: MeterProps): ReactElement<MeterProps> => (
  <meter className="meter" value={value} {...props} />
)
Meter.defaultProps = {
  min: 0,
  max: 100,
}

export default Meter
