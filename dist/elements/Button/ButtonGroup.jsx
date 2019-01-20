import React from 'react';
import cx from 'classnames';
var ButtonGroup = function (_a) {
    var children = _a.children, className = _a.className, block = _a.block;
    return (<div className={cx('btn-group', { 'btn-group-block': block }, className)}>
    {children}
  </div>);
};
export default ButtonGroup;
//# sourceMappingURL=ButtonGroup.jsx.map