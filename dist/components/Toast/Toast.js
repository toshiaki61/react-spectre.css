import * as tslib_1 from "tslib";
import React, { Fragment } from 'react';
import cx from 'classnames';
import { Button } from '@elements/Button';
import { attr } from '@utils/attr';
import { hasToastChildren } from './util';
function renderToast(p) {
    if (hasToastChildren(p)) {
        return p.children;
    }
    var content = p.content, title = p.title, onClearClick = p.onClearClick;
    var handleClearClick = onClearClick
        ? function (e) {
            e.preventDefault();
            onClearClick(e);
        }
        : null;
    return (React.createElement(Fragment, null,
        handleClearClick ? (React.createElement(Button, tslib_1.__assign({ clearButton: true }, attr({ floating: 'right' }), { onClick: handleClearClick }))) : null,
        title ? React.createElement("h5", null, title) : null,
        content));
}
var Toast = function (p) {
    var _a;
    var style = p.style ? { style: p.style } : {};
    return (React.createElement("div", tslib_1.__assign({ className: cx('toast', p.className, (_a = {},
            _a["toast-" + p.color] = p.color,
            _a)) }, style), renderToast(p)));
};
export default Toast;
//# sourceMappingURL=Toast.js.map