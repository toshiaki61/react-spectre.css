import classnames from 'classnames'
import React, {ReactElement} from 'react'

export interface ILoadingProps {
  large?: boolean
  className?: string
}
const Loading = ({
  large,
  className,
}: ILoadingProps): ReactElement<ILoadingProps> => {
  const classes = classnames(
    'loading',
    {
      'loading-lg': large,
    },
    className
  )
  return <div className={classes} />
}
Loading.defaultProps = {
  large: false,
  className: '',
}
export default Loading
