import * as React from 'react'

import cx from 'clsx'

import {FormLabeledProps} from './interfaces'

import FormIcon from './FormIcon'

const FormSwitch: React.FC<FormLabeledProps> = ({
  label,
  inline,
  formSize,
  ...rest
}) => (
  <label
    className={cx('form-switch', {
      'form-inline': inline,
      [`input-${formSize}`]: formSize,
    })}
  >
    <input type="checkbox" {...rest} />
    <FormIcon /> {label}
  </label>
)

export default FormSwitch
