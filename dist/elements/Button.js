import * as tslib_1 from "tslib";
import classnames from 'classnames';
import React from 'react';
var Button = function (_a) {
    var children = _a.children, className = _a.className, loading = _a.loading, href = _a.href, lg = _a.lg, sm = _a.sm, block = _a.block, inputGroup = _a.inputGroup, primary = _a.primary, clear = _a.clear, link = _a.link, action = _a.action, circle = _a.circle, props = tslib_1.__rest(_a, ["children", "className", "loading", "href", "lg", "sm", "block", "inputGroup", "primary", "clear", "link", "action", "circle"]);
    var linkButton = link || href;
    var classes = classnames('btn', {
        loading: loading,
        'btn-lg': lg,
        'btn-sm': sm,
        'btn-block': block,
        'input-group-btn': inputGroup,
        'btn-primary': primary,
        'btn-clear': clear,
        'btn-link': linkButton && !primary,
        'btn-action': action,
        circle: circle,
    }, className);
    var toReturn = null;
    if (href) {
        toReturn = (React.createElement("a", tslib_1.__assign({ href: href, className: classes }, props), children));
    }
    else {
        toReturn = (React.createElement("button", tslib_1.__assign({ className: classes }, props), children));
    }
    return toReturn;
};
var Group = function (_a) {
    var children = _a.children, className = _a.className, block = _a.block;
    var classes = classnames('btn-group', { 'btn-group-block': block }, className);
    return React.createElement("div", { className: classes }, children);
};
Group.defaultProps = {
    className: '',
    block: false,
};
Button.Group = Group;
export default Button;
//# sourceMappingURL=Button.js.map