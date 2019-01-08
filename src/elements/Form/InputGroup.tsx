import React, {FC} from 'react'

import {InputGroupProps} from './interfaces'

const InputGroup: FC<InputGroupProps> = ({children}) => (
  <div className="input-group">{children}</div>
)

export default InputGroup
