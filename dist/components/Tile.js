import classnames from 'classnames';
import React from 'react';
var Tile = function (_a) {
    var compact = _a.compact, title = _a.title, subtitle = _a.subtitle, content = _a.content, icon = _a.icon, style = _a.style, action = _a.action;
    var classes = classnames('tile', { 'tile-centered': compact });
    return (React.createElement("div", { className: classes },
        icon ? React.createElement("div", { className: "tile-icon" }, icon) : null,
        React.createElement("div", { className: "tile-content" },
            title ? (React.createElement("p", { className: "tile-title", style: style }, title)) : null,
            subtitle ? (React.createElement("p", { className: "tile-subtitle text-gray" }, subtitle)) : null,
            content),
        action ? React.createElement("div", { className: "tile-action" }, action) : null));
};
Tile.defaultProps = {
    compact: false,
    title: '',
    subtitle: '',
    content: '',
    icon: null,
    action: null,
};
export default Tile;
//# sourceMappingURL=Tile.js.map