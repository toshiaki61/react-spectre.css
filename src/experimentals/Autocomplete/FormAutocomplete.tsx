import React from 'react'

import cx from 'classnames'

import {FormAutocompleteProps} from './interfaces'

const FormAutocomplete = ({
  children,
  className,
  onFocus,
  onBlur,
}: FormAutocompleteProps) => (
  <div
    className={cx('form-autocomplete', className)}
    onFocus={onFocus}
    onBlur={onBlur}
  >
    {children}
  </div>
)

export default FormAutocomplete
