import * as React from 'react'

import {Icon} from '../../elements'

import {OffCanvasProps} from './interfaces'
import {hasOffCanvasChildren} from './util'

import OffCanvasContent from './OffCanvasContent'
import OffCanvasOverlay from './OffCanvasOverlay'
import OffCanvasSidebar from './OffCanvasSidebar'
import OffCanvasToggle from './OffCanvasToggle'

function renderOffCanvas(p: OffCanvasProps) {
  if (hasOffCanvasChildren(p)) {
    return p.children
  }
  const {sidebarId, sidebarContent, content} = p
  return (
    <React.Fragment>
      <OffCanvasToggle sidebarId={sidebarId}>
        <Icon type="menu" />
      </OffCanvasToggle>
      <OffCanvasSidebar id={sidebarId}>{sidebarContent}</OffCanvasSidebar>
      <OffCanvasOverlay />
      <OffCanvasContent>{content}</OffCanvasContent>
    </React.Fragment>
  )
}
const OffCanvas: React.FC<OffCanvasProps> = p => (
  <div className="off-canvas off-canvas-sidebar-show">{renderOffCanvas(p)}</div>
)

export default OffCanvas
