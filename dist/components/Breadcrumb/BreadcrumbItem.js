import React from 'react';
import { LinkHash } from '../../interfaces';
var BreadcrumbItem = function (_a) {
    var link = _a.link, children = _a.children, onClick = _a.onClick;
    var handleClick = function (e) {
        e.preventDefault();
        if (onClick) {
            onClick(e);
        }
    };
    return (React.createElement("li", { className: "breadcrumb-item" },
        React.createElement("a", { href: link || LinkHash, onClick: handleClick }, children)));
};
BreadcrumbItem.defaultProps = {
    link: '#',
};
export default BreadcrumbItem;
//# sourceMappingURL=BreadcrumbItem.js.map