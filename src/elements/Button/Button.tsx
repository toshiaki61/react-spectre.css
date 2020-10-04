import * as React from 'react'

import cx from 'clsx'

import {ButtonProps} from './interfaces'

import ButtonWrapper from './ButtonWrapper'

const Button: React.FC<ButtonProps> = ({
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
  ...rest
}) => (
  <ButtonWrapper
    className={cx(
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
    )}
    {...rest}
  >
    {children}
  </ButtonWrapper>
)

export default Button
