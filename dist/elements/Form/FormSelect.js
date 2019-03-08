import * as tslib_1 from "tslib";
import React from 'react';
import cx from 'classnames';
var FormSelect = function (_a) {
    var children = _a.children, formSize = _a.formSize, rest = tslib_1.__rest(_a, ["children", "formSize"]);
    var _b;
    return (React.createElement("select", tslib_1.__assign({ className: cx('form-select', (_b = {}, _b["select-" + formSize] = formSize, _b)) }, rest), children));
};
export default FormSelect;
//# sourceMappingURL=FormSelect.js.map