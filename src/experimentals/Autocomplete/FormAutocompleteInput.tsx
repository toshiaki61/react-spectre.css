import React from 'react'

import cx from 'classnames'

import {FormAutocompleteInputProps} from './interfaces'

const FormAutocompleteInput = ({
  children,
  className,
  active,
}: FormAutocompleteInputProps) => (
  <div
    className={cx('form-autocomplete-input', 'form-input', className, {
      'is-focused': active,
    })}
  >
    {children}
  </div>
)

export default FormAutocompleteInput
