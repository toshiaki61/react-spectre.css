import React, {FC} from 'react'

import cx from 'classnames'

import {FormProps} from './interfaces'

const Form: FC<FormProps> = ({children, className, horizontal, ...rest}) => (
  <form {...rest} className={cx(className, {'form-horizontal': horizontal})}>
    {children}
  </form>
)

export default Form
