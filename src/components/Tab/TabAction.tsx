import React, {FC} from 'react'

import {TabActionProps} from './interfaces'

const TabAction: FC<TabActionProps> = ({children}) => (
  <li className="tab-item tab-action">{children}</li>
)

export default TabAction
