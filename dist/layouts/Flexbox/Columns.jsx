import * as tslib_1 from "tslib";
import React from 'react';
import cx from 'classnames';
var Columns = function (_a) {
    var children = _a.children, className = _a.className, gapless = _a.gapless, oneline = _a.oneline, rest = tslib_1.__rest(_a, ["children", "className", "gapless", "oneline"]);
    return (<div className={cx('columns', className, {
        'col-gapless': gapless,
        'col-oneline': oneline,
    })} {...rest}>
    {children}
  </div>);
};
export default Columns;
//# sourceMappingURL=Columns.jsx.map