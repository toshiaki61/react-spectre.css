import React, {ReactElement} from 'react'

import cx from 'classnames'

import {FormGroupProps} from './interfaces'

const FormGroup = ({
  children,
  className,
  color,
}: FormGroupProps): ReactElement<FormGroupProps> => (
  <div
    className={cx('form-group', className, {
      [`has-${color}`]: color,
    })}
  >
    {children}
  </div>
)

FormGroup.defaultProps = {
  className: '',
  success: false,
  danger: false,
}

export default FormGroup
