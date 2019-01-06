import React, {SFC} from 'react'

import cx from 'classnames'

import {FormLabeledProps} from './interfaces'

import FormIcon from './FormIcon'

const FormSwitch: SFC<FormLabeledProps> = ({label, inline, size, ...rest}) => (
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
