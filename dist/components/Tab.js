import * as tslib_1 from "tslib";
import classnames from 'classnames';
import React from 'react';
var sharp = '#';
var Tab = function (_a) {
    var items = _a.items, active = _a.active, onClick = _a.onClick, action = _a.action;
    if (!items.length) {
        return null;
    }
    return (React.createElement("ul", { className: "tab tab-block" },
        items.map(function (_a) {
            var id = _a.id, name = _a.name, badge = _a.badge;
            var key = "tab-" + id;
            var linkProp = {
                onClick: function (e) { return onClick(e, id); },
            };
            if (badge) {
                linkProp.className = 'badge';
                linkProp['data-badge'] = badge;
            }
            return (React.createElement("li", { key: key, className: classnames('tab-item', { active: id === active }) },
                React.createElement("a", tslib_1.__assign({ href: sharp }, linkProp), name)));
        }),
        action ? React.createElement("li", { className: "tab-item tab-action" }, action) : null));
};
Tab.defaultProps = {
    active: '',
    action: null,
};
export default Tab;
//# sourceMappingURL=Tab.js.map