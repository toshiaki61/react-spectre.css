import * as tslib_1 from "tslib";
import React from 'react';
import { isAnchorElement } from './util';
var ButtonWrapper = function (p) {
    if (isAnchorElement(p)) {
        return React.createElement("a", tslib_1.__assign({}, p), p.children);
    }
    return React.createElement("button", tslib_1.__assign({}, p), p.children);
};
export default ButtonWrapper;
//# sourceMappingURL=ButtonWrapper.js.map