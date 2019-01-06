import {MouseEventHandler, ReactNode} from 'react'

import {MouseEventIdHandler} from '../../interfaces'

export interface TabItemProps {
  id: string
  title: ReactNode
  active?: boolean
  onClick?: MouseEventHandler
  badge?: string | number
}

export interface TabActionProps {
  children: ReactNode
}

export interface TabBaseProps {
  block?: boolean
}

export interface TabAttrProps extends TabBaseProps {
  items: TabItemProps[]
  onClick: MouseEventIdHandler
  activeId?: string
  action?: ReactNode
  block?: boolean
}

export interface TabChildrenProps extends TabBaseProps {
  children: ReactNode
}

export type TabProps = TabAttrProps | TabChildrenProps
