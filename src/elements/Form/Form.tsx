import React, {SFC} from 'react'

import cx from 'classnames'

import {FormProps} from './interfaces'

const Form: SFC<FormProps> = ({children, className, horizontal, ...rest}) => (
  <form {...rest} className={cx(className, {'form-horizontal': horizontal})}>
    {children}
  </form>
)

export default Form
