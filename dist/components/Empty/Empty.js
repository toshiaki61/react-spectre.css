import React, { Fragment } from 'react';
import cx from 'classnames';
import { Icon } from 'elements/Icon';
import EmptyAction from './EmptyAction';
import EmptyIcon from './EmptyIcon';
import EmptySubtitle from './EmptySubtitle';
import EmptyTitle from './EmptyTitle';
var Empty = function (p) {
    var children = p.children, className = p.className, iconType = p.iconType, title = p.title, subtitle = p.subtitle, action = p.action;
    return (React.createElement("div", { className: cx('empty', className) }, children ? (children) : (React.createElement(Fragment, null,
        iconType ? (React.createElement(EmptyIcon, null,
            React.createElement(Icon, { type: iconType, size: 3 }))) : null,
        title ? React.createElement(EmptyTitle, { className: "h5" }, title) : null,
        subtitle ? React.createElement(EmptySubtitle, null, subtitle) : null,
        action ? React.createElement(EmptyAction, null, action) : null))));
};
export default Empty;
//# sourceMappingURL=Empty.js.map