import React, { Fragment } from 'react';
import cx from 'classnames';
import { hasPopoverChildren } from './util';
import PopoverContainer from './PopoverContainer';
function renderPopover(p) {
    if (hasPopoverChildren(p)) {
        return p.children;
    }
    return (React.createElement(Fragment, null,
        p.target,
        React.createElement(PopoverContainer, null, p.content)));
}
var Popover = function (p) {
    var _a;
    return (React.createElement("div", { className: cx('popover', p.className, (_a = {},
            _a["popover-" + p.position] = p.position,
            _a)) }, renderPopover(p)));
};
export default Popover;
//# sourceMappingURL=Popover.js.map