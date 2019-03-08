import * as tslib_1 from "tslib";
import React from 'react';
import cx from 'classnames';
import FormIcon from './FormIcon';
var FormCheckbox = function (_a) {
    var label = _a.label, inline = _a.inline, size = _a.size, rest = tslib_1.__rest(_a, ["label", "inline", "size"]);
    var _b;
    return (React.createElement("label", { className: cx('form-checkbox', (_b = {
                'form-inline': inline
            },
            _b["input-" + size] = size,
            _b)) },
        React.createElement("input", tslib_1.__assign({ type: "checkbox" }, rest)),
        React.createElement(FormIcon, null),
        " ",
        label));
};
export default FormCheckbox;
//# sourceMappingURL=FormCheckbox.js.map