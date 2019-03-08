import * as tslib_1 from "tslib";
import React from 'react';
var ChipWrapper = function (_a) {
    var children = _a.children, htmlFor = _a.htmlFor, rest = tslib_1.__rest(_a, ["children", "htmlFor"]);
    return htmlFor ? (React.createElement("label", tslib_1.__assign({}, rest, { htmlFor: htmlFor }), children)) : (React.createElement("span", tslib_1.__assign({}, rest), children));
};
export default ChipWrapper;
//# sourceMappingURL=ChipWrapper.js.map