import * as tslib_1 from "tslib";
import React from 'react';
import cx from 'classnames';
var Container = function (_a) {
    var children = _a.children, className = _a.className, size = _a.size, props = tslib_1.__rest(_a, ["children", "className", "size"]);
    var _b;
    return (React.createElement("div", tslib_1.__assign({ className: cx('container', (_b = {},
            _b["grid-" + size] = size,
            _b), className) }, props), children));
};
export default Container;
//# sourceMappingURL=Container.js.map