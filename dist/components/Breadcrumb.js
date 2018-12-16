import * as tslib_1 from "tslib";
import React from 'react';
var Item = function (_a) {
    var link = _a.link, content = _a.content;
    return (React.createElement("li", { className: "breadcrumb-item" },
        React.createElement("a", { href: link }, content)));
};
Item.defaultProps = {
    link: '#',
    content: '',
};
var Breadcrumb = function (_a) {
    var items = _a.items;
    if (items.length === 0) {
        return null;
    }
    return (React.createElement("ul", { className: "breadcrumb" }, items.map(function (item, i) {
        var key = "breadcrumb-" + i;
        return React.createElement(Item, tslib_1.__assign({ key: key }, item));
    })));
};
export default Breadcrumb;
//# sourceMappingURL=Breadcrumb.js.map