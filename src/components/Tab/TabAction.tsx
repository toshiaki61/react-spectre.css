import React from 'react'

import {TabActionProps} from './interfaces'

const TabAction = ({children}: TabActionProps) => (
  <li className="tab-item tab-action">{children}</li>
)

export default TabAction
