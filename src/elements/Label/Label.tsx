import * as React from 'react'

import cx from 'clsx'

import {LabelProps} from './interfaces'

const Label: React.FC<LabelProps> = ({
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
