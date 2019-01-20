import React from 'react';
import cx from 'classnames';
var NavbarBrand = function (_a) {
    var children = _a.children, className = _a.className, href = _a.href;
    return href ? (<a href={href} className={cx('navbar-brand', className)}>
      {children}
    </a>) : (<span className={cx('navbar-brand', className)}>{children}</span>);
};
export default NavbarBrand;
//# sourceMappingURL=NavbarBrand.jsx.map