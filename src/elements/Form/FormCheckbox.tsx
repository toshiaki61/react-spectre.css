import * as React from 'react'

import cx from 'clsx'

import {FormLabeledProps} from './interfaces'

import FormIcon from './FormIcon'

const FormCheckbox: React.FC<FormLabeledProps> = ({
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
