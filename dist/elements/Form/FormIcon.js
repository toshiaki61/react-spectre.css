import * as tslib_1 from "tslib";
import React from 'react';
import { Icon } from '@elements/Icon';
import { attr } from '@utils/attr';
var FormIcon = function (_a) {
    var iconType = _a.iconType, loading = _a.loading;
    return iconType ? (React.createElement(Icon, { type: iconType, className: "form-icon" })) : (React.createElement("i", tslib_1.__assign({}, attr({ className: 'form-icon', loading: loading }))));
};
export default FormIcon;
//# sourceMappingURL=FormIcon.js.map