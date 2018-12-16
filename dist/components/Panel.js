import classnames from 'classnames';
import React from 'react';
var Panel = function (_a) {
    var header = _a.header, nav = _a.nav, content = _a.content, footer = _a.footer, headerClass = _a.headerClass, className = _a.className;
    var panelClass = classnames('panel', className);
    var headerClasses = classnames('panel-header', headerClass);
    return (React.createElement("div", { className: panelClass },
        header ? (React.createElement("div", { className: headerClasses }, typeof header === 'string' ? (React.createElement("div", { className: "panel-title" }, header)) : (header))) : null,
        nav ? React.createElement("div", { className: "panel-nav" }, nav) : null,
        content ? React.createElement("div", { className: "panel-body" }, content) : null,
        footer ? React.createElement("div", { className: "panel-footer" }, footer) : null));
};
Panel.defaultProps = {
    header: null,
    nav: null,
    content: null,
    footer: null,
    headerClass: '',
};
export default Panel;
//# sourceMappingURL=Panel.js.map