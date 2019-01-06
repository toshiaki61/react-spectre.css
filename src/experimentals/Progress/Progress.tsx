import React, {SFC} from 'react'

import {ProgressProps} from './interfaces'

const Progress: SFC<ProgressProps> = ({max, ...props}) => (
  <progress className="progress" max={max} {...props} />
)
Progress.defaultProps = {max: 100}

export default Progress
