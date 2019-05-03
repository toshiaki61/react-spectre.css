import * as React from 'react'

import {MouseEventIdHandler, StyleProps} from '../../interfaces'

export interface MenuBadgeProps {
  content?: React.ReactNode
}

export interface MenuItemBaseProps extends Partial<StyleProps> {
  id?: string
  onClick?: MouseEventIdHandler
}
export interface MenuItemDividerProps extends MenuItemBaseProps {
  divider: boolean | string
}
export interface MenuItemChildrenProps extends MenuItemBaseProps {
  children: React.ReactNode
}
export interface MenuItemContentProps extends MenuItemBaseProps {
  content: React.ReactNode
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
  children: React.ReactNode
}

export type MenuProps = MenuAttrProps | MenuChildrenProps
