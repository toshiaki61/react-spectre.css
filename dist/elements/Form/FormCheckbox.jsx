import * as tslib_1 from "tslib";
import React from 'react';
import cx from 'classnames';
import FormIcon from './FormIcon';
var FormCheckbox = function (_a) {
    var label = _a.label, inline = _a.inline, size = _a.size, rest = tslib_1.__rest(_a, ["label", "inline", "size"]);
    var _b;
    return (<label className={cx('form-checkbox', (_b = {
            'form-inline': inline
        },
        _b["input-" + size] = size,
        _b))}>
    <input type="checkbox" {...rest}/>
    <FormIcon /> {label}
  </label>);
};
export default FormCheckbox;
//# sourceMappingURL=FormCheckbox.jsx.map