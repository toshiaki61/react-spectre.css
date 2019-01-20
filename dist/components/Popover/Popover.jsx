import React, { Fragment } from 'react';
import cx from 'classnames';
import { hasPopoverChildren } from './util';
import PopoverContainer from './PopoverContainer';
function renderPopover(p) {
    if (hasPopoverChildren(p)) {
        return p.children;
    }
    return (<Fragment>
      {p.target}
      <PopoverContainer>{p.content}</PopoverContainer>
    </Fragment>);
}
var Popover = function (p) {
    var _a;
    return (<div className={cx('popover', p.className, (_a = {},
        _a["popover-" + p.position] = p.position,
        _a))}>
    {renderPopover(p)}
  </div>);
};
export default Popover;
//# sourceMappingURL=Popover.jsx.map