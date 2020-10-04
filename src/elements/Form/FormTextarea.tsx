import * as React from 'react'

import cx from 'clsx'

import {FormTextareaProps} from './interfaces'

const FormTextarea: React.FC<FormTextareaProps> = ({formSize, ...rest}) => (
  <textarea
    className={cx('form-input', {[`input-${formSize}`]: formSize})}
    {...rest}
  />
)

export default FormTextarea
