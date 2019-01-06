import React, {SFC} from 'react'

import cx from 'classnames'

import {LabelProps} from './interfaces'

const Label: SFC<LabelProps> = ({
  children,
  className,
  rounded,
  type,
  ...props
}) => (
  <span
    className={cx(
      'label',
      {
        'label-rounded': rounded,
        [`label-${type}`]: type,
      },
      className
    )}
    {...props}
  >
    {children}
  </span>
)

export default Label
