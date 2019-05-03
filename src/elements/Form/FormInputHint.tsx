import * as React from 'react'

import {FormInputHintProps} from './interfaces'

const FormInputHint: React.FC<FormInputHintProps> = ({children}) => (
  <p className="form-input-hint">{children}</p>
)
export default FormInputHint
