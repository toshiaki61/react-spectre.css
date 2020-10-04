import * as React from 'react'

import cx from 'clsx'

import {FormAutocompleteProps} from './interfaces'

const FormAutocomplete: React.FC<FormAutocompleteProps> = ({
  children,
  className,
  onFocus,
  onBlur,
}) => (
  <div
    className={cx('form-autocomplete', className)}
    onFocus={onFocus}
    onBlur={onBlur}
  >
    {children}
  </div>
)

export default FormAutocomplete
