import * as tslib_1 from "tslib";
import React from 'react';
import cx from 'classnames';
import { attr } from 'utilities/attr';
var Divider = function (_a) {
    var children = _a.children, content = _a.content, vertical = _a.vertical, li = _a.li, center = _a.center, className = _a.className, rest = tslib_1.__rest(_a, ["children", "content", "vertical", "li", "center", "className"]);
    return li ? (React.createElement("li", tslib_1.__assign({}, attr({
        divider: true,
        dividerVertical: vertical,
        dividerContent: content,
        className: cx({ 'text-center': center }),
    }), rest), children)) : (React.createElement("div", tslib_1.__assign({}, attr({
        divider: true,
        dividerVertical: vertical,
        dividerContent: content,
        className: cx({ 'text-center': center }),
    }), { "data-content": content }, rest), children));
};
Divider.defaultProps = {
    children: null,
    vertical: false,
    li: false,
    center: false,
    className: '',
};
export default Divider;
//# sourceMappingURL=Divider.js.map