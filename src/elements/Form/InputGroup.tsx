import React, {SFC} from 'react'

import {InputGroupProps} from './interfaces'

const InputGroup: SFC<InputGroupProps> = ({children}) => (
  <div className="input-group">{children}</div>
)

export default InputGroup
