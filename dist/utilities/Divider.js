import classnames from 'classnames';
import React from 'react';
var Divider = function (_a) {
    var children = _a.children, content = _a.content, vertical = _a.vertical, li = _a.li, center = _a.center, className = _a.className;
    var classes = classnames({
        divider: !vertical,
        'divider-vert': vertical,
        'text-center': center,
    }, className);
    if (li) {
        return (React.createElement("li", { className: classes, "data-content": content }, children));
    }
    return (React.createElement("div", { className: classes, "data-content": content }, children));
};
Divider.defaultProps = {
    children: null,
    vertical: false,
    li: false,
    center: false,
    className: '',
};
export default Divider;
//# sourceMappingURL=Divider.js.map