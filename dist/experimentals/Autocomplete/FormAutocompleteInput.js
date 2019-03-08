import React from 'react';
import cx from 'classnames';
var FormAutocompleteInput = function (_a) {
    var children = _a.children, className = _a.className, active = _a.active;
    return (React.createElement("div", { className: cx('form-autocomplete-input', 'form-input', className, {
            'is-focused': active,
        }) }, children));
};
export default FormAutocompleteInput;
//# sourceMappingURL=FormAutocompleteInput.js.map