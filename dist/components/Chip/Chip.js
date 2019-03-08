import * as tslib_1 from "tslib";
import React, { Fragment } from 'react';
import cx from 'classnames';
import { Avatar } from 'components/Avatar';
import { Button } from 'elements/Button';
import { hasChipChildren } from './util';
import ChipWrapper from './ChipWrapper';
function renderChip(p) {
    if (hasChipChildren(p)) {
        return p.children;
    }
    var clear = p.clear, icon = p.icon, avatar = p.avatar, onClearClick = p.onClearClick;
    return (React.createElement(Fragment, null,
        icon,
        avatar ? React.createElement(Avatar, tslib_1.__assign({ size: "sm" }, avatar)) : null,
        p.content,
        clear ? React.createElement(Button, { clearButton: true, onClick: onClearClick }) : null));
}
var Chip = function (p) {
    var htmlFor = p.htmlFor, className = p.className;
    return (React.createElement(ChipWrapper, { htmlFor: htmlFor || '', className: cx('chip', className) }, renderChip(p)));
};
export default Chip;
//# sourceMappingURL=Chip.js.map