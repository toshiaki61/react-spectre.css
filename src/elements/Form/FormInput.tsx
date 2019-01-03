import React from 'react'

import cx from 'classnames'

import {FormInputProps} from './interfaces'

const FormInput = ({
  type,
  size,
  state,
  placeholder,
  ...rest
}: FormInputProps) => (
  <input
    type={type}
    className={cx('form-input', {
      [`input-${size}`]: size,
      [`is-${state}`]: state,
    })}
    {...rest}
  />
)

export default FormInput
