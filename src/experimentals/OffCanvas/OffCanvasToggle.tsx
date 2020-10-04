import * as React from 'react'

import {Button} from '../../elements'

import {OffCanvasToggleProps} from './interfaces'

const OffCanvasToggle: React.FC<OffCanvasToggleProps> = ({
  children,
  sidebarId,
}) => (
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
