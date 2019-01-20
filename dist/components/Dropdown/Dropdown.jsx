import React from 'react';
import cx from 'classnames';
import { Button } from '@elements/Button';
import { Icon } from '@elements/Icon';
import { Menu } from '../Menu';
import { hasDropdownChildren } from './util';
function renderDropdown(p) {
    if (hasDropdownChildren(p)) {
        return p.children;
    }
    return <Menu onClick={p.onMenuClick} contents={p.contents}/>;
}
var Dropdown = function (p) {
    var className = p.className, active = p.active, right = p.right, initialValue = p.initialValue, onClick = p.onClick;
    return (<div className={cx('dropdown', {
        'dropdown-right': right,
        active: active,
    }, className)}>
      <Button color="link" className="dropdown-toggle" tabIndex={0} onClick={onClick}>
        {initialValue} <Icon type="caret"/>
      </Button>
      {renderDropdown(p)}
    </div>);
};
Dropdown.defaultProps = {
    className: '',
    active: false,
    right: false,
    initialValue: '',
};
export default Dropdown;
//# sourceMappingURL=Dropdown.jsx.map