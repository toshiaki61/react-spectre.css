import React from 'react';
import { hasBreadcrumbChildren } from './util';
import BreadcrumbItem from './BreadcrumbItem';
function renderBreadcrumb(p) {
    if (hasBreadcrumbChildren(p)) {
        return p.children;
    }
    return p.items.map(function (item, i) { return <BreadcrumbItem key={item.id} {...item}/>; });
}
var Breadcrumb = function (p) { return (<ul className="breadcrumb">{renderBreadcrumb(p)}</ul>); };
export default Breadcrumb;
//# sourceMappingURL=Breadcrumb.jsx.map