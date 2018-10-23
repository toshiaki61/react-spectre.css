import React, {ReactElement} from 'react'
import classnames from 'classnames'

export interface TileProps {
  compact?: boolean
  title?: string
  subtitle?: string
  content?: (ReactElement<any> | string)[] | string
  icon?: ReactElement<any> | string
  action?: ReactElement<any>
}
const Tile = ({
  compact,
  title,
  subtitle,
  content,
  icon,
  action,
}: TileProps): ReactElement<TileProps> => {
  const classes = classnames('tile', {'tile-centered': compact})
  return (
    <div className={classes}>
      {icon ? <div className="tile-icon">{icon}</div> : null}
      <div className="tile-content">
        {title ? <p className="tile-title">{title}</p> : null}
        {subtitle ? (
          <p className="tile-subtitle text-gray">{subtitle}</p>
        ) : null}
        {content}
      </div>
      {action ? <div className="tile-action">{action}</div> : null}
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
