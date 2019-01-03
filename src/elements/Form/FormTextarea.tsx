import React from 'react'

import cx from 'classnames'

import {FormTextareaProps} from './interfaces'

const FormTextarea = ({size}: FormTextareaProps) => (
  <textarea className={cx('form-input', {[`input-${size}`]: size})} />
)

export default FormTextarea
