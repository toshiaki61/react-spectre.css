import React, {FC} from 'react'

import cx from 'classnames'

import {FormLabeledProps} from './interfaces'

import FormIcon from './FormIcon'

const FormSwitch: FC<FormLabeledProps> = ({
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
