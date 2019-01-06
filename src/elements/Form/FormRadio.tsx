import React, {SFC} from 'react'

import cx from 'classnames'

import {FormLabeledProps} from './interfaces'

import FormIcon from './FormIcon'

const FormRadio: SFC<FormLabeledProps> = ({label, inline, size, ...rest}) => (
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
