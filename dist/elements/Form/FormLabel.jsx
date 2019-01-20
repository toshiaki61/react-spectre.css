import React from 'react';
import cx from 'classnames';
var FormLabel = function (_a) {
    var children = _a.children, className = _a.className, htmlFor = _a.htmlFor;
    if (htmlFor) {
        return (<label className={cx('form-label', className)} htmlFor={htmlFor}>
        {children}
      </label>);
    }
    return <span className={cx('form-label', className)}>{children}</span>;
};
export default FormLabel;
//# sourceMappingURL=FormLabel.jsx.map