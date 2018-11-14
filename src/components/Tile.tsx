import classnames from 'classnames'
import React, {ReactElement, ReactNode, ReactNodeArray} from 'react'

export interface ITileProps {
  compact?: boolean
  title?: string
  subtitle?: string
  content?: ReactNode | ReactNodeArray
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
}: ITileProps): ReactElement<ITileProps> => {
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
