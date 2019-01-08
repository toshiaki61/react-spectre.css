import React, {FC} from 'react'

import cx from 'classnames'

import {FormLabelProps} from './interfaces'

const FormLabel: FC<FormLabelProps> = ({children, className, htmlFor}) => {
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
