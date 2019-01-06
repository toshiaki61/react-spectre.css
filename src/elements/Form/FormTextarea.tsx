import React, {SFC} from 'react'

import cx from 'classnames'

import {FormTextareaProps} from './interfaces'

const FormTextarea: SFC<FormTextareaProps> = ({size}) => (
  <textarea className={cx('form-input', {[`input-${size}`]: size})} />
)

export default FormTextarea
