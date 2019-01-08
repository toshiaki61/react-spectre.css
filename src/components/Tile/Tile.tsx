import React, {FC, Fragment} from 'react'

import cx from 'classnames'

import {TileProps} from './interfaces'
import {hasTileChildren} from './util'

import TileAction from './TileAction'
import TileContent from './TileContent'
import TileIcon from './TileIcon'
import TileSubtitle from './TileSubtitle'
import TileTitle from './TileTitle'

function renderTile(p: TileProps) {
  if (hasTileChildren(p)) {
    return p.children
  }
  const {title, subtitle, content, icon, style, action} = p
  return (
    <Fragment>
      {icon ? <TileIcon>{icon}</TileIcon> : null}
      <TileContent>
        {title ? <TileTitle style={style}>{title}</TileTitle> : null}
        {subtitle ? (
          <TileSubtitle className="text-gray">{subtitle}</TileSubtitle>
        ) : null}
        {content}
      </TileContent>
      {action ? <TileAction>{action}</TileAction> : null}
    </Fragment>
  )
}
const Tile: FC<TileProps> = p => (
  <div className={cx('tile', p.className, {'tile-centered': p.compact})}>
    {renderTile(p)}
  </div>
)

Tile.defaultProps = {
  compact: false,
  title: '',
  subtitle: '',
  content: '',
  icon: null,
  action: null,
}

export default Tile
