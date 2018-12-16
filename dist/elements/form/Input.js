import * as tslib_1 from "tslib";
import classnames from 'classnames';
import React from 'react';
import Form from './Form';
import uniqueId from './uniqueId';
var BaseInput = function (_a) {
    var className = _a.className, success = _a.success, danger = _a.danger, textarea = _a.textarea, slider = _a.slider, sm = _a.sm, lg = _a.lg, props = tslib_1.__rest(_a, ["className", "success", "danger", "textarea", "slider", "sm", "lg"]);
    var classes = classnames(className, {
        'form-input': !slider,
        'is-success': success,
        'is-danger': danger,
        'input-lg': lg,
        'input-sm': sm,
    });
    if (textarea) {
        return React.createElement("textarea", tslib_1.__assign({ className: classes }, props));
    }
    if (slider) {
        return React.createElement("input", tslib_1.__assign({}, props, { type: "range", className: "slider tooltip" }));
    }
    return React.createElement("input", tslib_1.__assign({}, props, { className: classes }));
};
BaseInput.defaultProps = {};
var Input = function (_a) {
    var label = _a.label, id = _a.id, props = tslib_1.__rest(_a, ["label", "id"]);
    var elementId = id || uniqueId('input');
    var content = React.createElement(BaseInput, tslib_1.__assign({ id: elementId }, props));
    if (label) {
        return (React.createElement(Form.Group, null,
            React.createElement(Form.Label, { htmlFor: elementId }, label),
            content));
    }
    return content;
};
Input.defaultProps = {
    className: '',
    success: false,
    danger: false,
    sm: false,
    lg: false,
    textarea: false,
    label: '',
    id: '',
};
var Group = function (_a) {
    var children = _a.children, className = _a.className, success = _a.success, danger = _a.danger, props = tslib_1.__rest(_a, ["children", "className", "success", "danger"]);
    var classes = classnames('input-group', className, {
        'has-success': success,
        'has-danger': danger,
    });
    return (React.createElement("div", tslib_1.__assign({}, props, { className: classes }), children));
};
Group.defaultProps = {
    className: '',
    success: false,
    danger: false,
};
var Addon = function (_a) {
    var children = _a.children, className = _a.className, sm = _a.sm, lg = _a.lg, props = tslib_1.__rest(_a, ["children", "className", "sm", "lg"]);
    var classes = classnames('input-group-addon', className, {
        'addon-sm': sm,
        'addon-lg': lg,
    });
    return (React.createElement("span", tslib_1.__assign({}, props, { className: classes }), children));
};
Addon.defaultProps = {
    className: '',
    sm: false,
    lg: false,
};
Input.Group = Group;
Input.Addon = Addon;
export default Input;
//# sourceMappingURL=Input.js.map