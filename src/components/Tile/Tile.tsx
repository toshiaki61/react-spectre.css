import React, {ReactElement} from 'react'

import cx from 'classnames'

import {TileProps} from './interfaces'

import TileAction from './TileAction'
import TileContent from './TileContent'
import TileIcon from './TileIcon'
import TileSubtitle from './TileSubtitle'
import TileTitle from './TileTitle'

const Tile = ({
  compact,
  title,
  subtitle,
  content,
  icon,
  style,
  action,
}: TileProps): ReactElement<TileProps> => {
  return (
    <div className={cx('tile', {'tile-centered': compact})}>
      {icon ? <TileIcon>{icon}</TileIcon> : null}
      <TileContent>
        {title ? <TileTitle style={style}>{title}</TileTitle> : null}
        {subtitle ? (
          <TileSubtitle className="text-gray">{subtitle}</TileSubtitle>
        ) : null}
        {content}
      </TileContent>
      {action ? <TileAction>{action}</TileAction> : null}
    </div>
  )
}
Tile.defaultProps = {
  compact: false,
  title: '',
  subtitle: '',
  content: '',
  icon: null,
  action: null,
}

export default Tile
