import React from 'react'

import cx from 'classnames'

import FormIcon from './FormIcon'
import {FormLabeledProps} from './interfaces'

const FormSwitch = ({label, inline, size, ...rest}: FormLabeledProps) => (
  <label
    className={cx('form-switch', {
      'form-inline': inline,
      [`input-${size}`]: size,
    })}
  >
    <input type="checkbox" {...rest} />
    <FormIcon /> {label}
  </label>
)

export default FormSwitch
