import React from 'react'

import cx from 'classnames'

import FormIcon from './FormIcon'
import {FormLabeledProps} from './interfaces'

const FormRadio = ({label, inline, size, ...rest}: FormLabeledProps) => (
  <label
    className={cx('form-radio', {
      'form-inline': inline,
      [`input-${size}`]: size,
    })}
  >
    <input type="radio" {...rest} />
    <FormIcon /> {label}
  </label>
)

export default FormRadio
