import * as React from 'react'

import {TabActionProps} from './interfaces'

const TabAction: React.FC<TabActionProps> = ({children}) => (
  <li className="tab-item tab-action">{children}</li>
)

export default TabAction
