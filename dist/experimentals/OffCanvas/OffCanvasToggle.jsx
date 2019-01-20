import React from 'react';
import { Button } from '@elements/index';
var OffCanvasToggle = function (_a) {
    var children = _a.children, sidebarId = _a.sidebarId;
    return (<Button actionButton color="primary" className="off-canvas-toggle" href={"#" + sidebarId}>
    {children}
  </Button>);
};
export default OffCanvasToggle;
//# sourceMappingURL=OffCanvasToggle.jsx.map