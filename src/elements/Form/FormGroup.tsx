import React, {SFC} from 'react'

import cx from 'classnames'

import {FormGroupProps} from './interfaces'

const FormGroup: SFC<FormGroupProps> = ({children, className, color}) => (
  <div
    className={cx('form-group', className, {
      [`has-${color}`]: color,
    })}
  >
    {children}
  </div>
)

export default FormGroup
