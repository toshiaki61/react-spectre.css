import React from 'react';
import cx from 'classnames';
import Nav from './Nav';
var NavItem = function (_a) {
    var id = _a.id, name = _a.name, items = _a.items, active = _a.active, onClick = _a.onClick, className = _a.className;
    var handleItemClick = 
    // useCallback(
    function (e) {
        e.preventDefault();
        if (onClick) {
            onClick(e, id);
        }
    };
    // ,[id])
    return (React.createElement("li", { className: cx('nav-item', className, { active: active }) },
        React.createElement("a", { href: "#", onClick: handleItemClick }, name),
        items && items.length ? React.createElement(Nav, { items: items, onClick: onClick }) : null));
};
NavItem.defaultProps = {
    active: false,
};
export default NavItem;
//# sourceMappingURL=NavItem.js.map