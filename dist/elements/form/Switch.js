import * as tslib_1 from "tslib";
import classnames from 'classnames';
import React from 'react';
import uniqueId from './uniqueId';
var Switch = function (_a) {
    var children = _a.children, className = _a.className, props = tslib_1.__rest(_a, ["children", "className"]);
    var classes = classnames('form-switch', className);
    var id = uniqueId('switch');
    return (React.createElement("label", { className: classes, htmlFor: id },
        React.createElement("input", tslib_1.__assign({ type: "checkbox" }, props, { id: id })),
        React.createElement("i", { className: "form-icon" }),
        " ",
        children));
};
Switch.defaultProps = {
    className: '',
};
export default Switch;
//# sourceMappingURL=Switch.js.map