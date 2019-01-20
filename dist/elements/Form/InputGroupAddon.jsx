import React from 'react';
import cx from 'classnames';
var InputGroupAddon = function (_a) {
    var children = _a.children, formSize = _a.formSize;
    var _b;
    return (<span className={cx('input-group-addon', (_b = {}, _b["addon-" + formSize] = formSize, _b))}>
    {children}
  </span>);
};
export default InputGroupAddon;
//# sourceMappingURL=InputGroupAddon.jsx.map