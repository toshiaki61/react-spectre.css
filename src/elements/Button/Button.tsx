import React, {HTMLProps} from 'react'

import cx from 'classnames'

import {ButtonProps} from './interfaces'
import {isAnchorElement, isButtonElement} from './util'

import ButtonGroup from './ButtonGroup'

const Button = ({
  children,
  className,
  size,
  color,
  loading,
  circle,
  blockButton,
  inputGroup,
  clearButton,
  actionButton,
  ...props
}: ButtonProps) => {
  const classes = cx(
    'btn',
    {
      loading,
      circle,
      [`btn-${size}`]: size,
      [`btn-${color}`]: color,
      'input-group-btn': inputGroup,
      'btn-action': actionButton,
      'btn-block': blockButton,
      'btn-clear': clearButton,
    },
    className
  )
  if (isAnchorElement(props)) {
    return (
      <a className={classes} {...props}>
        {children}
      </a>
    )
  } else if (isButtonElement(props)) {
    return (
      <button className={classes} {...props}>
        {children}
      </button>
    )
  }
  return null
}
Button.defaultProps = {
  children: '',
  className: '',
  loading: false,
  circle: false,
  inputGroup: false,
  blockButton: false,
  clearBUtton: false,
  actionButton: false,
}
Button.Group = ButtonGroup

export default Button
