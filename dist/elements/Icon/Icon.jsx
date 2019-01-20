import * as tslib_1 from "tslib";
import React from 'react';
import cx from 'classnames';
var Icon = function (_a) {
    var className = _a.className, size = _a.size, type = _a.type, rest = tslib_1.__rest(_a, ["className", "size", "type"]);
    var _b;
    return (<i className={cx('icon', "icon-" + type, (_b = {},
        _b["icon-" + size + "x"] = size,
        _b), className)} {...rest}/>);
};
export default Icon;
//# sourceMappingURL=Icon.jsx.map