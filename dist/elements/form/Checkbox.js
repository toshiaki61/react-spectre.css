import * as tslib_1 from "tslib";
import classnames from 'classnames';
import React from 'react';
import uniqueId from './uniqueId';
var CheckboxSingle = function (_a) {
    var children = _a.children, label = _a.label, className = _a.className, props = tslib_1.__rest(_a, ["children", "label", "className"]);
    var classes = classnames('form-checkbox', className);
    var id = uniqueId('checkbox');
    return (React.createElement("label", tslib_1.__assign({ className: classes, htmlFor: id }, props),
        React.createElement("input", { id: id, type: "checkbox" }),
        React.createElement("i", { className: "form-icon" }),
        " ",
        label,
        " ",
        children));
};
CheckboxSingle.defaultProps = {
    children: null,
    className: '',
};
var Checkbox = function (_a) {
    var className = _a.className, label = _a.label, options = _a.options, props = tslib_1.__rest(_a, ["className", "label", "options"]);
    var keys = Object.keys(options);
    if (keys.length === 0) {
        return React.createElement(CheckboxSingle, tslib_1.__assign({ label: label, className: className }, props));
    }
    var list = keys.map(function (key) { return (React.createElement(CheckboxSingle, tslib_1.__assign({ key: key, label: options[key], className: className, value: key }, props))); });
    return (React.createElement("div", { className: "form-group" },
        React.createElement("span", { className: "form-label" }, label),
        list));
};
Checkbox.defaultProps = {
    options: {},
};
export default Checkbox;
//# sourceMappingURL=Checkbox.js.map