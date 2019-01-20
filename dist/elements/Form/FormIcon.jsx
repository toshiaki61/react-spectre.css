import React from 'react';
import { Icon } from '@elements/Icon';
import { attr } from '@utils/attr';
var FormIcon = function (_a) {
    var iconType = _a.iconType, loading = _a.loading;
    return iconType ? (<Icon type={iconType} className="form-icon"/>) : (<i {...attr({ className: 'form-icon', loading: loading })}/>);
};
export default FormIcon;
//# sourceMappingURL=FormIcon.jsx.map