import React, {SFC} from 'react'

import cx from 'classnames'

import {FormLabelProps} from './interfaces'

const FormLabel: SFC<FormLabelProps> = ({children, className, htmlFor}) => {
  if (htmlFor) {
    return (
      <label className={cx('form-label', className)} htmlFor={htmlFor}>
        {children}
      </label>
    )
  }
  return <span className={cx('form-label', className)}>{children}</span>
}

export default FormLabel
