import * as React from 'react'

import cx from 'clsx'

import {FormLabelProps} from './interfaces'

const FormLabel: React.FC<FormLabelProps> = ({
  children,
  className,
  htmlFor,
}) => {
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
