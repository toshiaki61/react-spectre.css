import React, {FC} from 'react'

import cx from 'classnames'

import {FormSelectProps} from './interfaces'

const FormSelect: FC<FormSelectProps> = ({children, formSize, ...rest}) => (
  <select
    className={cx('form-select', {[`select-${formSize}`]: formSize})}
    {...rest}
  >
    {children}
  </select>
)

export default FormSelect
