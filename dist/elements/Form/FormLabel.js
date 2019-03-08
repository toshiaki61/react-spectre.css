import React from 'react';
import cx from 'classnames';
var FormLabel = function (_a) {
    var children = _a.children, className = _a.className, htmlFor = _a.htmlFor;
    if (htmlFor) {
        return (React.createElement("label", { className: cx('form-label', className), htmlFor: htmlFor }, children));
    }
    return React.createElement("span", { className: cx('form-label', className) }, children);
};
export default FormLabel;
//# sourceMappingURL=FormLabel.js.map