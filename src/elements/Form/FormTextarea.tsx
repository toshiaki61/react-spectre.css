import React, {SFC} from 'react'

import cx from 'classnames'

import {FormTextareaProps} from './interfaces'

const FormTextarea: SFC<FormTextareaProps> = ({size, ...rest}) => (
  <textarea className={cx('form-input', {[`input-${size}`]: size})} {...rest} />
)

export default FormTextarea
