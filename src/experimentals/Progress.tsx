import React, {ReactElement} from 'react'

export interface ProgressProps {
  max?: number
}
const Progress = ({
  max,
  ...props
}: ProgressProps): ReactElement<ProgressProps> => (
  <progress className="progress" max={max} {...props} />
)
Progress.defaultProps = {max: 100}
export default Progress
