import {MouseEvent, MouseEventHandler, ReactNode} from 'react'

export interface TabItemProps {
  id: string
  title: ReactNode
  active: boolean
  onClick?: MouseEventHandler
  badge?: string
}

export interface TabActionProps {
  children: ReactNode
}

export interface TabProps {
  children?: ReactNode
  items?: TabItemProps[]
  activeId?: string
  onClick: (e: MouseEvent<any>, id: string) => void
  action?: ReactNode
  block?: boolean
}
