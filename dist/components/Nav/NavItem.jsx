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
    return (<li className={cx('nav-item', className, { active: active })}>
      <a href="#" onClick={handleItemClick}>
        {name}
      </a>
      {items && items.length ? <Nav items={items} onClick={onClick}/> : null}
    </li>);
};
NavItem.defaultProps = {
    active: false,
};
export default NavItem;
//# sourceMappingURL=NavItem.jsx.map