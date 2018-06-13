/* @flow */
import * as React from 'react'
import classnames from 'classnames'

export type LabelProps = {
  children: React.DOM,
  className?: string,
  rounded?: boolean,
  primary?: boolean,
  secondary?: boolean,
  success?: boolean,
  warning?: boolean,
  error?: boolean,
}
const Label = ({
  children,
  className,
  rounded,
  primary,
  secondary,
  success,
  warning,
  error,
  ...props
}: LabelProps) => {
  const classes = classnames(
    'label',
    {
      'label-rounded': rounded,
      'label-primary': primary,
      'label-secondary': secondary,
      'label-success': success,
      'label-warning': warning,
      'label-error': error,
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
  primary: false,
  secondary: false,
  success: false,
  warning: false,
  error: false,
}

export default Label
