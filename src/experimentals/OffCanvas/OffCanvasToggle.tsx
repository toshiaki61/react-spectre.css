import React, {SFC} from 'react'

import {Button} from '@elements/index'

import {OffCanvasToggleProps} from './interfaces'

const OffCanvasToggle: SFC<OffCanvasToggleProps> = ({children, sidebarId}) => (
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
