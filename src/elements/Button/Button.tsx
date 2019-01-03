import React, {HTMLProps} from 'react'

import cx from 'classnames'

import {ButtonProps} from './interfaces'
import {isAnchorElement, isButtonElement} from './util'

import ButtonGroup from './ButtonGroup'

const Button = ({
  size,
  color,
  children = '',
  className = '',
  loading = false,
  block = false,
  inputGroup = false,
  clear = false,
  actionButton = false,
  circle = false,
  ...props
}: ButtonProps) => {
  const classes = cx(
    'btn',
    {
      loading,
      [`btn-${size}`]: size,
      [`btn-${color}`]: color,
      'btn-block': block,
      'input-group-btn': inputGroup,
      'btn-clear': clear,
      'btn-action': actionButton,
      circle,
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

Button.Group = ButtonGroup
export default Button
