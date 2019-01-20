import React from 'react';
import { isAnchorElement } from './util';
var ButtonWrapper = function (p) {
    if (isAnchorElement(p)) {
        return <a {...p}>{p.children}</a>;
    }
    return <button {...p}>{p.children}</button>;
};
export default ButtonWrapper;
//# sourceMappingURL=ButtonWrapper.jsx.map