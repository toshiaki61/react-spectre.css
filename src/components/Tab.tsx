import React, {ReactElement, MouseEvent} from 'react'
import classnames from 'classnames'

const sharp = '#'
export interface LinkProps {
  onClick: (e: MouseEvent<any>) => void
  className?: string
  'data-badge'?: number | string
}

export interface ItemProps {
  id: string
  name: string
  badge?: number | string
}
export interface TabProps {
  items: Array<ItemProps>
  active?: string
  onClick: (e: MouseEvent<any>, id: string) => void
  action?: ReactElement<any>
}
const Tab = ({
  items,
  active,
  onClick,
  action,
}: TabProps): ReactElement<TabProps> | null => {
  if (!items.length) {
    return null
  }
  return (
    <ul className="tab tab-block">
      {items.map(({id, name, badge}) => {
        const key = `tab-${id}`
        const linkProp: LinkProps = {
          onClick: e => onClick(e, id),
        }
        if (badge) {
          linkProp.className = 'badge'
          linkProp['data-badge'] = badge
        }
        return (
          <li
            key={key}
            className={classnames('tab-item', {active: id === active})}
          >
            <a href={sharp} {...linkProp}>
              {name}
            </a>
          </li>
        )
      })}
      {action ? <li className="tab-item tab-action">{action}</li> : null}
    </ul>
  )
}
Tab.defaultProps = {
  active: '',
  action: null,
}
export default Tab
