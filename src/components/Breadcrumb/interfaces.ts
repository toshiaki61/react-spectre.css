import React, {MouseEventHandler, ReactElement, ReactNode} from 'react'

export interface BreadcrumbItemProps {
  id: string
  link?: string
  children?: ReactNode
  onClick?: MouseEventHandler
}

export interface BreadcrumbProps {
  items?: BreadcrumbItemProps[]
  children?: ReactNode
}
