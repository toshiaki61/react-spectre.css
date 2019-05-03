import * as React from 'react'

import {OffCanvasContentProps} from './interfaces'

const OffCanvasContent: React.FC<OffCanvasContentProps> = ({children}) => (
  <div className="off-canvas-content">
    <div className="content">{children}</div>
  </div>
)

export default OffCanvasContent
