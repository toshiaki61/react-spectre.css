import * as tslib_1 from "tslib";
import React from 'react';
import cx from 'classnames';
var Label = function (_a) {
    var children = _a.children, className = _a.className, rounded = _a.rounded, type = _a.type, props = tslib_1.__rest(_a, ["children", "className", "rounded", "type"]);
    var _b;
    return (<span className={cx('label', (_b = {
            'label-rounded': rounded
        },
        _b["label-" + type] = type,
        _b), className)} {...props}>
    {children}
  </span>);
};
export default Label;
//# sourceMappingURL=Label.jsx.map