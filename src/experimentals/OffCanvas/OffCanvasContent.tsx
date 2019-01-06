import React, {SFC} from 'react'

import {OffCanvasContentProps} from './interfaces'

const OffCanvasContent: SFC<OffCanvasContentProps> = ({children}) => (
  <div className="off-canvas-content">{children}</div>
)

export default OffCanvasContent
