import React, { Fragment } from 'react';
import cx from 'classnames';
import { hasTileChildren } from './util';
import TileAction from './TileAction';
import TileContent from './TileContent';
import TileIcon from './TileIcon';
import TileSubtitle from './TileSubtitle';
import TileTitle from './TileTitle';
function renderTile(p) {
    if (hasTileChildren(p)) {
        return p.children;
    }
    var title = p.title, subtitle = p.subtitle, content = p.content, icon = p.icon, style = p.style, action = p.action;
    return (React.createElement(Fragment, null,
        icon ? React.createElement(TileIcon, null, icon) : null,
        React.createElement(TileContent, null,
            title ? React.createElement(TileTitle, { style: style }, title) : null,
            subtitle ? (React.createElement(TileSubtitle, { className: "text-gray" }, subtitle)) : null,
            content),
        action ? React.createElement(TileAction, null, action) : null));
}
var Tile = function (p) { return (React.createElement("div", { className: cx('tile', p.className, { 'tile-centered': p.compact }) }, renderTile(p))); };
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