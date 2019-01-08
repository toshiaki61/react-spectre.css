import React, {FC} from 'react'

import cx from 'classnames'

import {FormSelectProps} from './interfaces'

const FormSelect: FC<FormSelectProps> = ({children, size}) => (
  <select className={cx('form-select', {[`select-${size}`]: size})}>
    {children}
  </select>
)

export default FormSelect
