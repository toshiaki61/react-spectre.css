import React, {ReactElement} from 'react'

import cx from 'classnames'

import {ContainerProps} from './interfaces'

const Container = ({
  children,
  className,
  size,
  ...props
}: ContainerProps): ReactElement<ContainerProps> => (
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
Container.defaultProps = {
  className: '',
}

export default Container
