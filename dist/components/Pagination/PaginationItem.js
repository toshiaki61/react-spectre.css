import * as tslib_1 from "tslib";
import React from 'react';
import cx from 'classnames';
import { LinkHash } from '../../interfaces';
var PaginationItem = function (_a) {
    var current = _a.current, value = _a.value, label = _a.label, disabled = _a.disabled, onClick = _a.onClick;
    var linkProp = {};
    if (disabled) {
        linkProp.tabIndex = -1;
    }
    var handleLinkClick = 
    // useCallback(
    function (e) {
        e.preventDefault();
        if (onClick) {
            onClick(e, value);
        }
    };
    // ,[value])
    return (React.createElement("li", { className: cx('page-item', {
            disabled: disabled,
            active: value === current,
        }) },
        React.createElement("a", tslib_1.__assign({ href: LinkHash }, linkProp, { onClick: handleLinkClick }), label)));
};
PaginationItem.defaultProps = {
    disabled: false,
};
export default PaginationItem;
//# sourceMappingURL=PaginationItem.js.map