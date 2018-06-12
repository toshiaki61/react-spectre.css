/* @flow */
import * as React from 'react'

export type ProgressProps = {
  max: number,
}
const Progress = ({max, ...props}: ProgressProps): React.Element<*> => (
  <progress className="progress" max={max} {...props} />
)
Progress.defaultProps = {}

export default Progress
