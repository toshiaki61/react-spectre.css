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
    return (<Fragment>
      {icon ? <TileIcon>{icon}</TileIcon> : null}
      <TileContent>
        {title ? <TileTitle style={style}>{title}</TileTitle> : null}
        {subtitle ? (<TileSubtitle className="text-gray">{subtitle}</TileSubtitle>) : null}
        {content}
      </TileContent>
      {action ? <TileAction>{action}</TileAction> : null}
    </Fragment>);
}
var Tile = function (p) { return (<div className={cx('tile', p.className, { 'tile-centered': p.compact })}>
    {renderTile(p)}
  </div>); };
Tile.defaultProps = {
    compact: false,
    title: '',
    subtitle: '',
    content: '',
    icon: null,
    action: null,
};
export default Tile;
//# sourceMappingURL=Tile.jsx.map