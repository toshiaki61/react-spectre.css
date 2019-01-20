import React from 'react';
import cx from 'classnames';
var Tooltip = function (_a) {
    var children = _a.children, text = _a.text, position = _a.position;
    var _b;
    return (<span className={cx('tooltip', (_b = {},
        _b["tooltip-" + position] = position,
        _b))} data-tooltip={text}>
    {children}
  </span>);
};
export default Tooltip;
//# sourceMappingURL=Tooltip.jsx.map