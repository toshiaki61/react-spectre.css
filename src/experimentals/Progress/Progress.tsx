import React, {ReactElement} from 'react'

import {ProgressProps} from './interfaces'

const Progress = ({
  max,
  ...props
}: ProgressProps): ReactElement<ProgressProps> => (
  <progress className="progress" max={max} {...props} />
)
Progress.defaultProps = {max: 100}

export default Progress
