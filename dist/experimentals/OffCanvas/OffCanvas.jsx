import React, { Fragment } from 'react';
import { Icon } from '@elements/index';
import { hasOffCanvasChildren } from './util';
import OffCanvasContent from './OffCanvasContent';
import OffCanvasOverlay from './OffCanvasOverlay';
import OffCanvasSidebar from './OffCanvasSidebar';
import OffCanvasToggle from './OffCanvasToggle';
function renderOffCanvas(p) {
    if (hasOffCanvasChildren(p)) {
        return p.children;
    }
    var sidebarId = p.sidebarId, sidebarContent = p.sidebarContent, content = p.content;
    return (<Fragment>
      <OffCanvasToggle sidebarId={sidebarId}>
        <Icon type="menu"/>
      </OffCanvasToggle>
      <OffCanvasSidebar id={sidebarId}>{sidebarContent}</OffCanvasSidebar>
      <OffCanvasOverlay />
      <OffCanvasContent>{content}</OffCanvasContent>
    </Fragment>);
}
var OffCanvas = function (p) { return (<div className="off-canvas off-canvas-sidebar-show">{renderOffCanvas(p)}</div>); };
export default OffCanvas;
//# sourceMappingURL=OffCanvas.jsx.map