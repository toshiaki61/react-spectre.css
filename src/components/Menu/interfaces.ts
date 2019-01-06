import {CSSProperties, ReactNode} from 'react'

import {MouseEventIdHandler, StyleProps} from '../../interfaces'

export interface MenuBadgeProps {
  content?: ReactNode
}

export interface MenuItemBaseProps extends Partial<StyleProps> {
  id?: string
  onClick?: MouseEventIdHandler
}
export interface MenuItemDividerProps extends MenuItemBaseProps {
  divider: boolean | string
}
export interface MenuItemChildrenProps extends MenuItemBaseProps {
  children: ReactNode
}
export interface MenuItemContentProps extends MenuItemBaseProps {
  content: ReactNode
  link?: string
  active?: boolean
  badge?: string | number
}

export type MenuItemProps =
  | MenuItemDividerProps
  | MenuItemChildrenProps
  | MenuItemContentProps

export interface MenuBaseProps extends Partial<StyleProps> {
  nav?: boolean
  onClick?: MouseEventIdHandler
}

export interface MenuAttrProps extends MenuBaseProps {
  contents: MenuItemProps[]
}

export interface MenuChildrenProps extends MenuBaseProps {
  children: ReactNode
}

export type MenuProps = MenuAttrProps | MenuChildrenProps
