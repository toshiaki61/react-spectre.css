import React from 'react';
import cx from 'classnames';
var FormAutocomplete = function (_a) {
    var children = _a.children, className = _a.className, onFocus = _a.onFocus, onBlur = _a.onBlur;
    return (<div className={cx('form-autocomplete', className)} onFocus={onFocus} onBlur={onBlur}>
    {children}
  </div>);
};
export default FormAutocomplete;
//# sourceMappingURL=FormAutocomplete.jsx.map