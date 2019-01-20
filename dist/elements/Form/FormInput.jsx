import * as tslib_1 from "tslib";
import React from 'react';
import cx from 'classnames';
var FormInput = function (_a) {
    var type = _a.type, formSize = _a.formSize, state = _a.state, placeholder = _a.placeholder, rest = tslib_1.__rest(_a, ["type", "formSize", "state", "placeholder"]);
    var _b;
    return (<input type={type} className={cx('form-input', (_b = {},
        _b["input-" + formSize] = formSize,
        _b["is-" + state] = state,
        _b))} placeholder={placeholder} {...rest}/>);
};
export default FormInput;
//# sourceMappingURL=FormInput.jsx.map