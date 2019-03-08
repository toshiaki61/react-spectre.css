import React from 'react';
import { Button } from '@elements/index';
var OffCanvasToggle = function (_a) {
    var children = _a.children, sidebarId = _a.sidebarId;
    return (React.createElement(Button, { actionButton: true, color: "primary", className: "off-canvas-toggle", href: "#" + sidebarId }, children));
};
export default OffCanvasToggle;
//# sourceMappingURL=OffCanvasToggle.js.map