import * as tslib_1 from "tslib";
import classnames from 'classnames';
import React from 'react';
import Icon from '../elements/Icon';
var OffCanvas = function (_a) {
    var children = _a.children, sidebar = _a.sidebar, props = tslib_1.__rest(_a, ["children", "sidebar"]);
    return (React.createElement("div", tslib_1.__assign({ className: "off-canvas off-canvas-sidebar-show" }, props),
        React.createElement("a", { className: "off-canvas-toggle btn btn-primary btn-action", href: "#sidebar-id" },
            React.createElement(Icon, { menu: true })),
        React.createElement("div", { id: "sidebar-id", className: classnames('off-canvas-sidebar', sidebar.className || '') }, sidebar.content),
        React.createElement("a", { className: "off-canvas-overlay", href: "#close" }, "close"),
        React.createElement("div", { className: "off-canvas-content" }, children)));
};
export default OffCanvas;
//# sourceMappingURL=OffCanvas.js.map