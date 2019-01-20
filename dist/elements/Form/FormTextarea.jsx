import * as tslib_1 from "tslib";
import React from 'react';
import cx from 'classnames';
var FormTextarea = function (_a) {
    var formSize = _a.formSize, rest = tslib_1.__rest(_a, ["formSize"]);
    var _b;
    return (<textarea className={cx('form-input', (_b = {}, _b["input-" + formSize] = formSize, _b))} {...rest}/>);
};
export default FormTextarea;
//# sourceMappingURL=FormTextarea.jsx.map