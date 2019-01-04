import React from 'react'

import {Button} from '@elements/index'

import {OffCanvasToggleProps} from './interfaces'

const OffCanvasToggle = ({children, sidebarId}: OffCanvasToggleProps) => (
  <Button
    actionButton
    color="primary"
    className="off-canvas-toggle"
    href={`#${sidebarId}`}
  >
    {children}
  </Button>
)

export default OffCanvasToggle
