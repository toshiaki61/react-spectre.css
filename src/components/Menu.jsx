/* @flow */
import * as React from 'react'
import classnames from 'classnames'

import Divider from '../utilities/Divider'

export type BadgeProps = {
  content?: string | number | React.DOM,
}
const Badge = ({content}: BadgeProps): React.Element<*> | null => {
  if (!content) {
    return null
  }

  return (
    <div className="menu-badge">
      <span className="label label-primary">{content}</span>
    </div>
  )
}
Badge.defaultProps = {
  content: '',
}

export type ItemProps = {
  id?: string,
  link?: string,
  content?: string,
  className?: string,
  divider?: boolean | string,
  active?: boolean,
  badge?: number,
  onClick?: (e: Event, id: string) => void,
}
const Item = ({
  id,
  link,
  content,
  className,
  divider,
  active,
  badge,
  onClick,
  ...props
}: ItemProps): React.Element<*> => {
  const classes = classnames('menu-item', className)
  if (divider) {
    return (
      <Divider
        className={className}
        content={typeof divider === 'string' ? divider : ''}
      />
    )
  }
  return (
    <li className={classes} {...props}>
      <Badge content={badge} />
      <a
        href={link}
        className={classnames({active})}
        onClick={e => onClick(e, id)}
      >
        {content}
      </a>
    </li>
  )
}
Item.defaultProps = {
  link: '',
  content: '',
  className: '',
  divider: false,
  active: false,
  badge: 0,
}

export type MenuProps = {
  className?: string,
  nav?: boolean,
  contents: Array<ItemProps>,
  onClick: (e: Event, id: string) => void,
}
const Menu = ({
  className,
  nav,
  contents,
  onClick,
  ...props
}: MenuProps): React.Element<*> => {
  const classes = classnames(
    'menu',
    {
      'menu-nav': nav,
    },
    className
  )
  const ulProps = Object.keys(props)
    .filter(p => p !== 'header')
    .reduce((memo, p) => Object.assign(memo, {[p]: props[p]}), {})
  return (
    <ul className={classes} {...ulProps}>
      {contents.map((content, i) => {
        const key = content.id || `menu-item_${i}`
        return (
          <Item key={key} {...content} onClick={content.onClick || onClick} />
        )
      })}
    </ul>
  )
}
Menu.defaultProps = {
  className: '',
  nav: false,
}

export default Menu
