import React, {FC} from 'react'

import cx from 'classnames'

import {FormLabeledProps} from './interfaces'

import FormIcon from './FormIcon'

const FormCheckbox: FC<FormLabeledProps> = ({
  label,
  inline,
  size,
  ...rest
}) => (
  <label
    className={cx('form-checkbox', {
      'form-inline': inline,
      [`input-${size}`]: size,
    })}
  >
    <input type="checkbox" {...rest} />
    <FormIcon /> {label}
  </label>
)

export default FormCheckbox
