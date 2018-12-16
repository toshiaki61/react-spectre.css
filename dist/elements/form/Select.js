import * as tslib_1 from "tslib";
import classnames from 'classnames';
import React from 'react';
import Form from './Form';
var SelectOnly = function (_a) {
    var children = _a.children, className = _a.className, sm = _a.sm, lg = _a.lg, props = tslib_1.__rest(_a, ["children", "className", "sm", "lg"]);
    var classes = classnames('form-select', className, {
        'select-sm': sm,
        'select-lg': lg,
    });
    return (React.createElement("select", tslib_1.__assign({ className: classes }, props), children));
};
SelectOnly.defaultProps = {
    children: null,
    className: '',
    sm: false,
    lg: false,
};
var Select = function (_a) {
    var children = _a.children, label = _a.label, options = _a.options, props = tslib_1.__rest(_a, ["children", "label", "options"]);
    var labelNode = label ? React.createElement(Form.Label, null, label) : null;
    var keys = Object.keys(options);
    if (keys.length > 0) {
        return (React.createElement(Form.Group, null,
            labelNode,
            React.createElement(SelectOnly, tslib_1.__assign({}, props), keys.map(function (key) { return (React.createElement("option", { key: key }, options[key])); }))));
    }
    return React.createElement(SelectOnly, tslib_1.__assign({}, props), children);
};
Select.defaultProps = {
    label: '',
    options: {},
};
export default Select;
//# sourceMappingURL=Select.js.map