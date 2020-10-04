import * as React from 'react'

import cx from 'clsx'

import {FormProps} from './interfaces'

const Form: React.FC<FormProps> = ({
  children,
  className,
  horizontal,
  ...rest
}) => (
  <form {...rest} className={cx(className, {'form-horizontal': horizontal})}>
    {children}
  </form>
)

export default Form
