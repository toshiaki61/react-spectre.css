import React, {SFC} from 'react'

import cx from 'classnames'

import {FormInputProps} from './interfaces'

const FormInput: SFC<FormInputProps> = ({
  type,
  size,
  state,
  placeholder,
  ...rest
}) => (
  <input
    type={type}
    className={cx('form-input', {
      [`input-${size}`]: size,
      [`is-${state}`]: state,
    })}
    placeholder={placeholder}
    {...rest}
  />
)

export default FormInput
