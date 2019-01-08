import React, {FC} from 'react'

import {FormInputHintProps} from './interfaces'

const FormInputHint: FC<FormInputHintProps> = ({children}) => (
  <p className="form-input-hint">{children}</p>
)
export default FormInputHint
