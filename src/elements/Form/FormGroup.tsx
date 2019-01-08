import React, {FC} from 'react'

import cx from 'classnames'

import {FormGroupProps} from './interfaces'

const FormGroup: FC<FormGroupProps> = ({children, className, color}) => (
  <div
    className={cx('form-group', className, {
      [`has-${color}`]: color,
    })}
  >
    {children}
  </div>
)

export default FormGroup
