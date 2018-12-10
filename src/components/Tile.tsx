import classnames from 'classnames'
import React, {
  CSSProperties,
  ReactElement,
  ReactNode,
  ReactNodeArray,
} from 'react'

export interface ITileProps {
  compact?: boolean
  title?: ReactNode
  subtitle?: ReactNode
  content?: ReactNode | ReactNodeArray
  icon?: ReactElement<any> | string
  style?: CSSProperties
  action?: ReactElement<any>
}
const Tile = ({
  compact,
  title,
  subtitle,
  content,
  icon,
  style,
  action,
}: ITileProps): ReactElement<ITileProps> => {
  const classes = classnames('tile', {'tile-centered': compact})
  return (
    <div className={classes}>
      {icon ? <div className="tile-icon">{icon}</div> : null}
      <div className="tile-content">
        {title ? (
          <p className="tile-title" style={style}>
            {title}
          </p>
        ) : null}
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
