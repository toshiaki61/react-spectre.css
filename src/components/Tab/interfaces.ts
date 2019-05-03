import * as React from 'react'

import {MouseEventIdHandler} from '../../interfaces'

export interface TabItemProps {
  title: React.ReactNode
  active?: boolean
  onClick?: React.MouseEventHandler
  badge?: string | number
}

export interface TabActionProps {
  children: React.ReactNode
}

export interface TabBaseProps {
  block?: boolean
}

export interface TabAttrProps extends TabBaseProps {
  items: Array<TabItemProps & {id: string}>
  onClick: MouseEventIdHandler
  activeId?: string
  action?: React.ReactNode
  block?: boolean
}

export interface TabChildrenProps extends TabBaseProps {
  children: React.ReactNode
}

export type TabProps = TabAttrProps | TabChildrenProps
