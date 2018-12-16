import classnames from 'classnames';
import React from 'react';
var Popover = function (_a) {
    var target = _a.target, children = _a.children, right = _a.right, left = _a.left, bottom = _a.bottom, className = _a.className;
    var classes = classnames('popover', className, {
        'popover-right': right,
        'popover-left': left,
        'popover-bottom': bottom,
    });
    return (React.createElement("div", { className: classes },
        target,
        React.createElement("div", { className: "popover-container" }, children)));
};
Popover.defaultProps = {
    right: false,
    left: false,
    bottom: false,
    className: '',
};
export default Popover;
//# sourceMappingURL=Popover.js.map