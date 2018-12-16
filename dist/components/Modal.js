import * as tslib_1 from "tslib";
import classnames from 'classnames';
import React from 'react';
import Button from '../elements/Button';
import noop from '../utilities/noop';
var Modal = function (_a) {
    var active = _a.active, title = _a.title, content = _a.content, footer = _a.footer, small = _a.small, large = _a.large, className = _a.className, onClearClick = _a.onClearClick, props = tslib_1.__rest(_a, ["active", "title", "content", "footer", "small", "large", "className", "onClearClick"]);
    var classes = classnames('modal', className, {
        active: active,
        'modal-sm': small,
        'modal-lg': large,
    });
    return (React.createElement("div", tslib_1.__assign({ className: classes }, props),
        React.createElement("div", { className: "modal-overlay", onClick: onClearClick }),
        React.createElement("div", { className: "modal-container" },
            React.createElement("div", { className: "modal-header" },
                React.createElement(Button, { clear: true, className: "float-right", onClick: onClearClick }),
                title ? React.createElement("div", { className: "modal-title h5" }, title) : null),
            content ? (React.createElement("div", { className: "modal-body" },
                React.createElement("div", { className: "content" }, content))) : null,
            footer ? React.createElement("div", { className: "modal-footer" }, footer) : null)));
};
Modal.defaultProps = {
    active: false,
    title: '',
    content: null,
    footer: null,
    small: false,
    large: false,
    onClearClick: noop,
};
export default Modal;
//# sourceMappingURL=Modal.js.map