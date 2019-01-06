import React, {SFC} from 'react'

import {FormInputHintProps} from './interfaces'

const FormInputHint: SFC<FormInputHintProps> = ({children}) => (
  <p className="form-input-hint">{children}</p>
)
export default FormInputHint
