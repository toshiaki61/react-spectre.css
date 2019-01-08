import React, {FC} from 'react'

import {OffCanvasContentProps} from './interfaces'

const OffCanvasContent: FC<OffCanvasContentProps> = ({children}) => (
  <div className="off-canvas-content">{children}</div>
)

export default OffCanvasContent
