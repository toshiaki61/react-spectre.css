import * as tslib_1 from "tslib";
import classnames from 'classnames';
import React from 'react';
var Label = function (_a) {
    var children = _a.children, className = _a.className, rounded = _a.rounded, primary = _a.primary, secondary = _a.secondary, success = _a.success, warning = _a.warning, error = _a.error, props = tslib_1.__rest(_a, ["children", "className", "rounded", "primary", "secondary", "success", "warning", "error"]);
    var classes = classnames('label', {
        'label-rounded': rounded,
        'label-primary': primary,
        'label-secondary': secondary,
        'label-success': success,
        'label-warning': warning,
        'label-error': error,
    }, className);
    return (React.createElement("span", tslib_1.__assign({ className: classes }, props), children));
};
Label.defaultProps = {
    className: '',
    rounded: false,
    primary: false,
    secondary: false,
    success: false,
    warning: false,
    error: false,
};
export default Label;
//# sourceMappingURL=Label.js.map