import * as React from 'react'

import cx from 'clsx'

import {FormGroupProps} from './interfaces'

const FormGroup: React.FC<FormGroupProps> = ({children, className, color}) => (
  <div
    className={cx('form-group', className, {
      [`has-${color}`]: color,
    })}
  >
    {children}
  </div>
)

export default FormGroup
