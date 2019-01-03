import React from 'react'

import cx from 'classnames'

import {FormLabelProps} from './interfaces'

const FormLabel = ({children, className, htmlFor}: FormLabelProps) => {
  if (htmlFor) {
    return (
      <label className={cx('form-label', className)} htmlFor={htmlFor}>
        {children}
      </label>
    )
  }
  return <span className={cx('form-label', className)}>{children}</span>
}
FormLabel.defaultProps = {
  className: '',
  htmlFor: '',
}

export default FormLabel
