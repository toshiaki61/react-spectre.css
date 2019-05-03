import * as React from 'react'

import cx from 'clsx'

import {FormInputProps} from './interfaces'

const FormInput: React.FC<FormInputProps> = ({
  type,
  formSize,
  state,
  placeholder,
  ...rest
}) => (
  <input
    type={type}
    className={cx('form-input', {
      [`input-${formSize}`]: formSize,
      [`is-${state}`]: state,
    })}
    placeholder={placeholder}
    {...rest}
  />
)

export default FormInput
