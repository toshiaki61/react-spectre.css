import * as tslib_1 from "tslib";
import React, { Fragment } from 'react';
import cx from 'classnames';
import PanelBody from './PanelBody';
import PanelFooter from './PanelFooter';
import PanelHeader from './PanelHeader';
import PanelNav from './PanelNav';
import PanelTitle from './PanelTitle';
var Panel = function (_a) {
    var header = _a.header, nav = _a.nav, content = _a.content, footer = _a.footer, headerClass = _a.headerClass, className = _a.className, children = _a.children, rest = tslib_1.__rest(_a, ["header", "nav", "content", "footer", "headerClass", "className", "children"]);
    return (React.createElement("div", tslib_1.__assign({ className: cx('panel', className) }, rest), children ? (children) : (React.createElement(Fragment, null,
        header ? (React.createElement(PanelHeader, { className: headerClass }, typeof header === 'string' ? (React.createElement(PanelTitle, null, header)) : (header))) : null,
        nav ? React.createElement(PanelNav, null, nav) : null,
        content ? React.createElement(PanelBody, null, content) : null,
        footer ? React.createElement(PanelFooter, null, footer) : null))));
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