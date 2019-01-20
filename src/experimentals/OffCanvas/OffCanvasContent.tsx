import React, {FC} from 'react'

import {OffCanvasContentProps} from './interfaces'

const OffCanvasContent: FC<OffCanvasContentProps> = ({children}) => (
  <div className="off-canvas-content">
    <div className="content">{children}</div>
  </div>
)

export default OffCanvasContent
