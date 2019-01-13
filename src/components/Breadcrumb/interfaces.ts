import {MouseEventHandler, ReactElement, ReactNode} from 'react'

export interface BreadcrumbItemProps {
  children: ReactNode
  link?: string
  onClick?: MouseEventHandler
}

export interface BreadcrumbAttrProps {
  items: Array<BreadcrumbItemProps & {id: string}>
}
export interface BreadcrumbChildrenProps {
  children:
    | Array<ReactElement<BreadcrumbItemProps>>
    | ReactElement<BreadcrumbItemProps>
}
export type BreadcrumbProps = BreadcrumbAttrProps | BreadcrumbChildrenProps
