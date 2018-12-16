import * as tslib_1 from "tslib";
import classnames from 'classnames';
import React from 'react';
var Form = function (_a) {
    var children = _a.children, className = _a.className, horizontal = _a.horizontal, props = tslib_1.__rest(_a, ["children", "className", "horizontal"]);
    var classes = classnames(className, { 'form-horizontal': horizontal });
    return (React.createElement("form", tslib_1.__assign({}, props, { className: classes }), children));
};
Form.defaultProps = {
    className: '',
    horizontal: false,
};
var Group = function (_a) {
    var children = _a.children, className = _a.className, success = _a.success, danger = _a.danger, props = tslib_1.__rest(_a, ["children", "className", "success", "danger"]);
    var classes = classnames('form-group', className, {
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
var Label = function (_a) {
    var children = _a.children, className = _a.className, htmlFor = _a.htmlFor, props = tslib_1.__rest(_a, ["children", "className", "htmlFor"]);
    var classes = classnames('form-label', className);
    if (htmlFor) {
        return (React.createElement("label", tslib_1.__assign({}, props, { className: classes, htmlFor: htmlFor }), children));
    }
    return (React.createElement("span", tslib_1.__assign({}, props, { className: classes }), children));
};
Label.defaultProps = {
    className: '',
    htmlFor: '',
};
Form.Group = Group;
Form.Label = Label;
export default Form;
//# sourceMappingURL=Form.js.map