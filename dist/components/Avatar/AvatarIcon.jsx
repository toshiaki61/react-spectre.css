import * as tslib_1 from "tslib";
import React from 'react';
import cx from 'classnames';
var AvatarIcon = function (_a) {
    var className = _a.className, alt = _a.alt, props = tslib_1.__rest(_a, ["className", "alt"]);
    return (<img className={cx('avatar-icon', className)} alt={alt} {...props}/>);
};
AvatarIcon.defaultProps = {
    alt: '',
    className: '',
};
export default AvatarIcon;
//# sourceMappingURL=AvatarIcon.jsx.map