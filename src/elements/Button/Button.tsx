import React, {HTMLProps} from 'react'

import cx from 'classnames'

import {ButtonProps} from './interfaces'

import ButtonGroup from './ButtonGroup'

function isAnchorElement(item: any): item is HTMLProps<HTMLAnchorElement> {
  return item.href
}
function isButtonElement(item: any): item is HTMLProps<HTMLButtonElement> {
  return !item.href
}
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
