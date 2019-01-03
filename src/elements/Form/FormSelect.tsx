import React from 'react'

import cx from 'classnames'

import {FormSelectProps} from './interfaces'

const FormSelect = ({children, size}: FormSelectProps) => (
  <select className={cx('form-select', {[`select-${size}`]: size})}>
    {children}
  </select>
)

export default FormSelect
