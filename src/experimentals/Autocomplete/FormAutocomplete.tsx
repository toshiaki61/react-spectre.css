import React, {FC} from 'react'

import cx from 'classnames'

import {FormAutocompleteProps} from './interfaces'

const FormAutocomplete: FC<FormAutocompleteProps> = ({
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
