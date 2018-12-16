import * as tslib_1 from "tslib";
import classnames from 'classnames';
import React from 'react';
import Button from '../elements/Button';
var Toast = function (_a) {
    var title = _a.title, content = _a.content, className = _a.className, onClearClick = _a.onClearClick, primary = _a.primary, success = _a.success, warning = _a.warning, error = _a.error, props = tslib_1.__rest(_a, ["title", "content", "className", "onClearClick", "primary", "success", "warning", "error"]);
    var classes = classnames('toast', className, {
        'toast-primary': primary,
        'toast-success': success,
        'toast-warning': warning,
        'toast-error': error,
    });
    return (React.createElement("div", tslib_1.__assign({ className: classes }, props),
        onClearClick ? (React.createElement(Button, { clear: true, className: "float-right", onClick: onClearClick })) : null,
        title ? React.createElement("h5", null, title) : null,
        content));
};
Toast.defaultProps = {
    title: '',
    className: '',
    onClearClick: undefined,
    primary: false,
    success: false,
    warning: false,
    error: false,
};
export default Toast;
//# sourceMappingURL=Toast.js.map