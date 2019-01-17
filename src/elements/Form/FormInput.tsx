import React, {FC} from 'react'

import cx from 'classnames'

import {FormInputProps} from './interfaces'

const FormInput: FC<FormInputProps> = ({
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
