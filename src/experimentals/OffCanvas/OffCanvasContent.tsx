import React from 'react'

import {OffCanvasContentProps} from './interfaces'

const OffCanvasContent = ({children}: OffCanvasContentProps) => (
  <div className="off-canvas-content">{children}</div>
)

export default OffCanvasContent
