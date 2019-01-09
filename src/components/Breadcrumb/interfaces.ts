import {MouseEventHandler, ReactElement, ReactNode} from 'react'

export interface BreadcrumbItemProps {
  id: string
  children: ReactNode
  link?: string
  onClick?: MouseEventHandler
}

export interface BreadcrumbAttrProps {
  items: BreadcrumbItemProps[]
}
export interface BreadcrumbChildrenProps {
  children:
    | Array<ReactElement<BreadcrumbItemProps>>
    | ReactElement<BreadcrumbItemProps>
}
export type BreadcrumbProps = BreadcrumbAttrProps | BreadcrumbChildrenProps
