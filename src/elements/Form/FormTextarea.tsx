import React, {FC} from 'react'

import cx from 'classnames'

import {FormTextareaProps} from './interfaces'

const FormTextarea: FC<FormTextareaProps> = ({formSize, ...rest}) => (
  <textarea
    className={cx('form-input', {[`input-${formSize}`]: formSize})}
    {...rest}
  />
)

export default FormTextarea
