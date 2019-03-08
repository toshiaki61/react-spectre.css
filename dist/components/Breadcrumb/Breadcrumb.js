import * as tslib_1 from "tslib";
import React from 'react';
import { hasBreadcrumbChildren } from './util';
import BreadcrumbItem from './BreadcrumbItem';
function renderBreadcrumb(p) {
    if (hasBreadcrumbChildren(p)) {
        return p.children;
    }
    return p.items.map(function (item, i) { return React.createElement(BreadcrumbItem, tslib_1.__assign({ key: item.id }, item)); });
}
var Breadcrumb = function (p) { return (React.createElement("ul", { className: "breadcrumb" }, renderBreadcrumb(p))); };
export default Breadcrumb;
//# sourceMappingURL=Breadcrumb.js.map