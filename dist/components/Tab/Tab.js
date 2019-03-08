import * as tslib_1 from "tslib";
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
    return (React.createElement(Fragment, null,
        items.map(function (item) {
            var handleLinkClick = 
            // useCallback(
            function (e) {
                e.preventDefault();
                onClick(e, item.id);
            };
            // , [item.id])
            return (React.createElement(TabItem, tslib_1.__assign({ key: item.id }, item, { onClick: handleLinkClick, active: activeId === item.id })));
        }),
        action ? React.createElement(TabAction, null, action) : null));
}
var Tab = function (p) { return (React.createElement("ul", { className: cx('tab', { 'tab-block': p.block }) }, renderTab(p))); };
export default Tab;
//# sourceMappingURL=Tab.js.map