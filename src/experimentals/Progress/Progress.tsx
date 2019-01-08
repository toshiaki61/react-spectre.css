import React, {FC} from 'react'

import {ProgressProps} from './interfaces'

const Progress: FC<ProgressProps> = ({max, ...props}) => (
  <progress className="progress" max={max} {...props} />
)
Progress.defaultProps = {max: 100}

export default Progress
