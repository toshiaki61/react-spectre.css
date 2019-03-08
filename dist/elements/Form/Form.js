import * as tslib_1 from "tslib";
import React from 'react';
import cx from 'classnames';
var Form = function (_a) {
    var children = _a.children, className = _a.className, horizontal = _a.horizontal, rest = tslib_1.__rest(_a, ["children", "className", "horizontal"]);
    return (React.createElement("form", tslib_1.__assign({}, rest, { className: cx(className, { 'form-horizontal': horizontal }) }), children));
};
export default Form;
//# sourceMappingURL=Form.js.map