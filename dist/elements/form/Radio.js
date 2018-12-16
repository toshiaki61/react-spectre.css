import * as tslib_1 from "tslib";
import classnames from 'classnames';
import React from 'react';
import uniqueId from './uniqueId';
var RadioSingle = function (_a) {
    var label = _a.label, className = _a.className, name = _a.name, checked = _a.checked, props = tslib_1.__rest(_a, ["label", "className", "name", "checked"]);
    var classes = classnames('form-radio', className);
    var id = uniqueId('radio');
    return (React.createElement("label", { className: classes, htmlFor: id },
        React.createElement("input", tslib_1.__assign({ type: "radio", name: name, checked: checked, id: id }, props)),
        React.createElement("i", { className: "form-icon" }),
        " ",
        label));
};
RadioSingle.defaultProps = {
    label: '',
    className: '',
    checked: false,
};
var Radio = function (_a) {
    var name = _a.name, label = _a.label, options = _a.options, props = tslib_1.__rest(_a, ["name", "label", "options"]);
    var keys = Object.keys(options);
    if (keys.length === 0) {
        return React.createElement(RadioSingle, tslib_1.__assign({ label: label, name: name }, props));
    }
    var list = keys.map(function (key) { return (React.createElement(RadioSingle, tslib_1.__assign({ key: key, label: options[key], name: name, value: key }, props))); });
    return (React.createElement("div", { className: "form-group" },
        React.createElement("span", { className: "form-label" }, label),
        list));
};
Radio.defaultProps = {
    options: {},
};
export default Radio;
//# sourceMappingURL=Radio.js.map