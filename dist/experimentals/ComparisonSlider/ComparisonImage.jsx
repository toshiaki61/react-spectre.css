import * as tslib_1 from "tslib";
import React from 'react';
import cx from 'classnames';
var ComparisonImage = function (_a) {
    var src = _a.src, alt = _a.alt, className = _a.className, props = tslib_1.__rest(_a, ["src", "alt", "className"]);
    return (<img src={src} className={cx('rounded', className)} alt={alt} {...props}/>);
};
ComparisonImage.defaultProps = {
    alt: '',
    className: '',
};
export default ComparisonImage;
//# sourceMappingURL=ComparisonImage.jsx.map