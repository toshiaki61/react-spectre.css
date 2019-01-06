import React, {SFC} from 'react'

import {TabActionProps} from './interfaces'

const TabAction: SFC<TabActionProps> = ({children}) => (
  <li className="tab-item tab-action">{children}</li>
)

export default TabAction
