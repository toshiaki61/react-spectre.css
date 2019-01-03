import React, {ReactElement} from 'react'

import cx from 'classnames'

import {FormProps} from './interfaces'

const Form = ({
  children,
  className,
  horizontal,
  ...rest
}: FormProps): ReactElement<FormProps> => (
  <form {...rest} className={cx(className, {'form-horizontal': horizontal})}>
    {children}
  </form>
)

Form.defaultProps = {
  className: '',
  horizontal: false,
}

export default Form
