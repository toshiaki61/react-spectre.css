import * as tslib_1 from "tslib";
import classnames from 'classnames';
import React from 'react';
import Button from '../elements/Button';
import Icon from '../elements/Icon';
import Menu from './Menu';
var Dropdown = function (_a) {
    var className = _a.className, active = _a.active, right = _a.right, initialValue = _a.initialValue, contents = _a.contents, onClick = _a.onClick, onMenuClick = _a.onMenuClick, props = tslib_1.__rest(_a, ["className", "active", "right", "initialValue", "contents", "onClick", "onMenuClick"]);
    var classes = classnames('dropdown', {
        'dropdown-right': right,
        active: active,
    }, className);
    return (React.createElement("div", tslib_1.__assign({ className: classes }, props),
        React.createElement(Button, { link: true, className: "dropdown-toggle", tabIndex: 0, onClick: onClick },
            initialValue,
            " ",
            React.createElement(Icon, { caret: true })),
        React.createElement(Menu, { onClick: onMenuClick, contents: contents })));
};
Dropdown.defaultProps = {
    className: '',
    active: false,
    right: false,
    initialValue: '',
};
export default Dropdown;
//# sourceMappingURL=Dropdown.js.map