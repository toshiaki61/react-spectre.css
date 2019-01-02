import React, {ReactElement} from 'react'

import cx from 'classnames'

import {LoadingProps} from './interfaces'

const Loading = ({
  large,
  className,
  ...rest
}: LoadingProps): ReactElement<LoadingProps> => {
  const classes = cx(
    'loading',
    {
      'loading-lg': large,
    },
    className
  )
  return <div className={classes} {...rest} />
}
Loading.defaultProps = {
  large: false,
  className: '',
}

export default Loading
