import React from 'react';
import cx from 'classnames';
var NavbarBrand = function (_a) {
    var children = _a.children, className = _a.className, href = _a.href;
    return href ? (React.createElement("a", { href: href, className: cx('navbar-brand', className) }, children)) : (React.createElement("span", { className: cx('navbar-brand', className) }, children));
};
export default NavbarBrand;
//# sourceMappingURL=NavbarBrand.js.map