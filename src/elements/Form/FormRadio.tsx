import React, {FC} from 'react'

import cx from 'classnames'

import {FormLabeledProps} from './interfaces'

import FormIcon from './FormIcon'

const FormRadio: FC<FormLabeledProps> = ({
  label,
  inline,
  formSize,
  ...rest
}) => (
  <label
    className={cx('form-radio', {
      'form-inline': inline,
      [`input-${formSize}`]: formSize,
    })}
  >
    <input type="radio" {...rest} />
    <FormIcon /> {label}
  </label>
)

export default FormRadio
