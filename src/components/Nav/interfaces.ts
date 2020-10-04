import * as React from 'react'
import {StyleProps} from '../../interfaces'

export interface NavItemProps {
  id: string
  name: string
  onClick?: (e: React.MouseEvent<any>, id: string) => void
  active?: boolean
  items?: NavItemProps[]
  className?: string
}

export interface NavAttrProps extends Partial<StyleProps> {
  items: NavItemProps[]
  activeId?: string
  onClick?: (e: React.MouseEvent<any>, id: string) => void
}

export interface NavChildrenProps extends Partial<StyleProps> {
  children: React.ReactNode
}

export type NavProps = NavAttrProps | NavChildrenProps
