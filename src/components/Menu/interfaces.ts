import {MouseEvent, ReactNode} from 'react'

export interface MenuBadgeProps {
  content?: ReactNode
}

export interface MenuItemProps {
  id?: string
  link?: string
  content?: ReactNode
  className?: string
  divider?: boolean | string
  active?: boolean
  badge?: string
  onClick?: (e: MouseEvent<any>, id: string) => void
}

export interface MenuProps {
  className?: string
  nav?: boolean
  contents?: MenuItemProps[]
  onClick?: (e: MouseEvent<any>, id: string) => void
  children?: ReactNode
}
