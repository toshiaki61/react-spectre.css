/* @flow */
import * as React from 'react'
import classnames from 'classnames'

const sharp = '#'
export type LinkProps = {
  onClick: (e: Event) => void,
  className?: string,
  'data-badge'?: number | string,
}
export type ItemProps = {
  id: string,
  name: string,
  badge: number | string,
}
export type TabProps = {
  items: Array<ItemProps>,
  active?: string,
  onClick: (e: Event, id: string) => void,
  action?: React.DOM,
}
const Tab = ({
  items,
  active,
  onClick,
  action,
}: TabProps): React.Element<*> | null => {
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
