import {CSSProperties, ReactNode} from 'react'

import {MouseEventIdHandler} from '../../interfaces'

export interface MenuBadgeProps {
  content?: ReactNode
}

export interface MenuItemProps {
  children?: ReactNode
  className?: string
  id?: string
  link?: string
  content?: ReactNode
  divider?: boolean | string
  active?: boolean
  badge?: string
  onClick?: MouseEventIdHandler
}

export interface MenuProps {
  children?: ReactNode
  className?: string
  style?: CSSProperties
  nav?: boolean
  contents?: MenuItemProps[]
  onClick?: MouseEventIdHandler
}
