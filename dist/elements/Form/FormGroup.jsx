import React from 'react';
import cx from 'classnames';
var FormGroup = function (_a) {
    var children = _a.children, className = _a.className, color = _a.color;
    var _b;
    return (<div className={cx('form-group', className, (_b = {},
        _b["has-" + color] = color,
        _b))}>
    {children}
  </div>);
};
export default FormGroup;
//# sourceMappingURL=FormGroup.jsx.map