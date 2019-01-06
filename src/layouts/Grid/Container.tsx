import React, {SFC} from 'react'

import cx from 'classnames'

import {ContainerProps} from './interfaces'

const Container: SFC<ContainerProps> = ({
  children,
  className,
  size,
  ...props
}) => (
  <div
    className={cx(
      'container',
      {
        [`grid-${size}`]: size,
      },
      className
    )}
    {...props}
  >
    {children}
  </div>
)

export default Container
