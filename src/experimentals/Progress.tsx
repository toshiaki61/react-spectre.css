import React, {ReactElement} from 'react'

export interface IProgressProps {
  max?: number
}
const Progress = ({
  max,
  ...props
}: IProgressProps): ReactElement<IProgressProps> => (
  <progress className="progress" max={max} {...props} />
)
Progress.defaultProps = {max: 100}
export default Progress
