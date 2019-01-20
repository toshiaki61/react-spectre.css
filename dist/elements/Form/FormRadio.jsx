import * as tslib_1 from "tslib";
import React from 'react';
import cx from 'classnames';
import FormIcon from './FormIcon';
var FormRadio = function (_a) {
    var label = _a.label, inline = _a.inline, formSize = _a.formSize, rest = tslib_1.__rest(_a, ["label", "inline", "formSize"]);
    var _b;
    return (<label className={cx('form-radio', (_b = {
            'form-inline': inline
        },
        _b["input-" + formSize] = formSize,
        _b))}>
    <input type="radio" {...rest}/>
    <FormIcon /> {label}
  </label>);
};
export default FormRadio;
//# sourceMappingURL=FormRadio.jsx.map