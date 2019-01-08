import React, {FC} from 'react'

import cx from 'classnames'

import {FormAutocompleteInputProps} from './interfaces'

const FormAutocompleteInput: FC<FormAutocompleteInputProps> = ({
  children,
  className,
  active,
}) => (
  <div
    className={cx('form-autocomplete-input', 'form-input', className, {
      'is-focused': active,
    })}
  >
    {children}
  </div>
)

export default FormAutocompleteInput
