import React from 'react'

import cx from 'classnames'

import {LabelProps} from './interfaces'

const Label = ({children, className, rounded, type, ...props}: LabelProps) => {
  const classes = cx(
    'label',
    {
      'label-rounded': rounded,
      [`label-${type}`]: type,
    },
    className
  )
  return (
    <span className={classes} {...props}>
      {children}
    </span>
  )
}

Label.defaultProps = {
  className: '',
  rounded: false,
}

export default Label
