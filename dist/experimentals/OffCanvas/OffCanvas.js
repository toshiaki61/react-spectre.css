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
    return (React.createElement(Fragment, null,
        React.createElement(OffCanvasToggle, { sidebarId: sidebarId },
            React.createElement(Icon, { type: "menu" })),
        React.createElement(OffCanvasSidebar, { id: sidebarId }, sidebarContent),
        React.createElement(OffCanvasOverlay, null),
        React.createElement(OffCanvasContent, null, content)));
}
var OffCanvas = function (p) { return (React.createElement("div", { className: "off-canvas off-canvas-sidebar-show" }, renderOffCanvas(p))); };
export default OffCanvas;
//# sourceMappingURL=OffCanvas.js.map