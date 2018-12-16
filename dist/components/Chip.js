import * as tslib_1 from "tslib";
import classnames from 'classnames';
import React from 'react';
import Button from '../elements/Button';
import noop from '../utilities/noop';
import Avatar from './Avatar';
var Chip = function (_a) {
    var clear = _a.clear, icon = _a.icon, avatar = _a.avatar, content = _a.content, className = _a.className, onClearClick = _a.onClearClick, props = tslib_1.__rest(_a, ["clear", "icon", "avatar", "content", "className", "onClearClick"]);
    var classes = classnames('chip', className);
    return (React.createElement("span", tslib_1.__assign({ className: classes }, props),
        icon,
        avatar ? React.createElement(Avatar, tslib_1.__assign({ sm: true }, avatar)) : null,
        content,
        clear ? React.createElement(Button, { clear: true, onClick: onClearClick }) : null));
};
Chip.defaultProps = {
    className: '',
    clear: false,
    icon: null,
    avatar: null,
    content: '',
    onClearClick: noop,
};
export default Chip;
//# sourceMappingURL=Chip.js.map