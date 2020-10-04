import * as React from 'react'

export interface BreadcrumbItemProps {
  children: React.ReactNode
  link?: string
  onClick?: React.MouseEventHandler
}

export interface BreadcrumbAttrProps {
  items: Array<BreadcrumbItemProps & {id: string}>
}
export interface BreadcrumbChildrenProps {
  children:
    | Array<React.ReactElement<BreadcrumbItemProps>>
    | React.ReactElement<BreadcrumbItemProps>
}
export type BreadcrumbProps = BreadcrumbAttrProps | BreadcrumbChildrenProps
