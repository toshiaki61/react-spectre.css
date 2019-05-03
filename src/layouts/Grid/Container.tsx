import * as React from 'react'

import cx from 'clsx'

import {ContainerProps} from './interfaces'

const Container: React.FC<ContainerProps> = ({
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
