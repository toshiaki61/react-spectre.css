import classnames from 'classnames'
import React, {MouseEvent, ReactElement, ReactNode} from 'react'
import Divider from '../utilities/Divider'
import noop from '../utilities/noop'

export interface IBadgeProps {
  content?: string | number | ReactElement<any>
}
const Badge = ({content}: IBadgeProps): ReactElement<IBadgeProps> | null => {
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
export interface MenuItemProps {
  id?: string
  link?: string
  content?: ReactNode
  className?: string
  divider?: boolean | string
  active?: boolean
  badge?: number
  onClick?: (e: MouseEvent<any>, id: string) => void
}
const MenuItem = ({
  id,
  link,
  content,
  className,
  divider,
  active,
  badge,
  onClick,
  ...props
}: MenuItemProps): ReactElement<MenuItemProps> => {
  const classes = classnames('menu-item', className)
  if (divider) {
    return (
      <Divider
        className={className}
        content={typeof divider === 'string' ? divider : ''}
      />
    )
  }
  if (typeof content !== 'string') {
    return (
      <li className={classes} {...props}>
        {content}
      </li>
    )
  }

  const handleItemClick = onClick
    ? (e: MouseEvent<any>) => onClick(e, id || '')
    : noop
  return (
    <li className={classes} {...props}>
      <Badge content={badge} />
      <a href={link} className={classnames({active})} onClick={handleItemClick}>
        {content}
      </a>
    </li>
  )
}
MenuItem.defaultProps = {
  link: 'javascript:void(0)',
  content: '',
  className: '',
  divider: false,
  active: false,
  badge: 0,
}

export interface MenuProps {
  className?: string
  nav?: boolean
  contents: MenuItemProps[]
  onClick?: (e: MouseEvent<any>, id: string) => void
}
const Menu = ({
  className,
  nav,
  contents,
  onClick,
  ...props
}: MenuProps): ReactElement<MenuProps> => {
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
          <MenuItem
            key={key}
            {...content}
            onClick={content.onClick || onClick}
          />
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
