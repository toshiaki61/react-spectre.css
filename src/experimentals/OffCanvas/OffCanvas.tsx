import React, {Fragment, SFC} from 'react'

import {Icon} from '@elements/index'

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
    <Fragment>
      <OffCanvasToggle sidebarId={sidebarId}>
        <Icon type="menu" />
      </OffCanvasToggle>
      <OffCanvasSidebar id={sidebarId}>{sidebarContent}</OffCanvasSidebar>
      <OffCanvasOverlay />
      <OffCanvasContent>{content}</OffCanvasContent>
    </Fragment>
  )
}
const OffCanvas: SFC<OffCanvasProps> = p => (
  <div className="off-canvas off-canvas-sidebar-show">{renderOffCanvas(p)}</div>
)

export default OffCanvas
