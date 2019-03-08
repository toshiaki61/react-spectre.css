import React from 'react';
var MenuBadge = function (_a) {
    var content = _a.content;
    if (!content) {
        return null;
    }
    return (React.createElement("div", { className: "menu-badge" },
        React.createElement("span", { className: "label label-primary" }, content)));
};
export default MenuBadge;
//# sourceMappingURL=MenuBadge.js.map