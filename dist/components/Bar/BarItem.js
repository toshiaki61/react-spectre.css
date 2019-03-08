import * as tslib_1 from "tslib";
import React from 'react';
import { attr } from 'utilities/attr';
var BarItem = function (_a) {
    var small = _a.small, tooltip = _a.tooltip, content = _a.content, rest = tslib_1.__rest(_a, ["small", "tooltip", "content"]);
    return (React.createElement("div", tslib_1.__assign({}, attr({ className: 'bar-item', tooltip: tooltip }), rest), small ? null : content));
};
BarItem.defaultProps = {
    small: false,
    tooltip: '',
    content: '',
};
export default BarItem;
//# sourceMappingURL=BarItem.js.map