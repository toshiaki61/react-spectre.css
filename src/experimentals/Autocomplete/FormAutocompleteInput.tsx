import * as React from 'react'

import cx from 'clsx'

import {FormAutocompleteInputProps} from './interfaces'

const FormAutocompleteInput: React.FC<FormAutocompleteInputProps> = ({
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
