import React, {Fragment, ReactElement} from 'react'

import {Icon} from '@elements/index'

import {OffCanvasProps} from './interfaces'

import OffCanvasContent from './OffCanvasContent'
import OffCanvasOverlay from './OffCanvasOverlay'
import OffCanvasSidebar from './OffCanvasSidebar'
import OffCanvasToggle from './OffCanvasToggle'

const OffCanvas = ({
  children,
  sidebarId,
  sidebarContent,
  content,
  ...props
}: OffCanvasProps): ReactElement<OffCanvasProps> => (
  <div className="off-canvas off-canvas-sidebar-show" {...props}>
    {children
      ? children
      : sidebarId && (
          <Fragment>
            <OffCanvasToggle sidebarId={sidebarId}>
              <Icon type="menu" />
            </OffCanvasToggle>
            <OffCanvasSidebar id={sidebarId}>{sidebarContent}</OffCanvasSidebar>
            <OffCanvasOverlay />
            <OffCanvasContent>{content}</OffCanvasContent>
          </Fragment>
        )}
  </div>
)
export default OffCanvas
