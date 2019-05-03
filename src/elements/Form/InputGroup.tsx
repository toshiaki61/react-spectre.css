import * as React from 'react'

import {InputGroupProps} from './interfaces'

const InputGroup: React.FC<InputGroupProps> = ({children}) => (
  <div className="input-group">{children}</div>
)

export default InputGroup
