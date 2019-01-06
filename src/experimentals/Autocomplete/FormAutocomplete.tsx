import React, {SFC} from 'react'

import cx from 'classnames'

import {FormAutocompleteProps} from './interfaces'

const FormAutocomplete: SFC<FormAutocompleteProps> = ({
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
