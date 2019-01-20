import React, { Fragment } from 'react';
import cx from 'classnames';
import { hasTabChildren } from './util';
import TabAction from './TabAction';
import TabItem from './TabItem';
function renderTab(p) {
    if (hasTabChildren(p)) {
        return p.children;
    }
    var items = p.items, activeId = p.activeId, onClick = p.onClick, action = p.action;
    return (<Fragment>
      {items.map(function (item) {
        var handleLinkClick = 
        // useCallback(
        function (e) {
            e.preventDefault();
            onClick(e, item.id);
        };
        // , [item.id])
        return (<TabItem key={item.id} {...item} onClick={handleLinkClick} active={activeId === item.id}/>);
    })}
      {action ? <TabAction>{action}</TabAction> : null}
    </Fragment>);
}
var Tab = function (p) { return (<ul className={cx('tab', { 'tab-block': p.block })}>{renderTab(p)}</ul>); };
export default Tab;
//# sourceMappingURL=Tab.jsx.map