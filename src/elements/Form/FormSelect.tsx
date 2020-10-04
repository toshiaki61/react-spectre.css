import * as React from 'react'

import cx from 'clsx'

import {FormSelectProps} from './interfaces'

const FormSelect: React.FC<FormSelectProps> = ({
  children,
  formSize,
  ...rest
}) => (
  <select
    className={cx('form-select', {[`select-${formSize}`]: formSize})}
    {...rest}
  >
    {children}
  </select>
)

export default FormSelect
