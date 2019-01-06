import {MouseEvent, ReactNode} from 'react'

export interface Page {
  label: ReactNode
  value: number
}

export interface PaginationItemProps {
  label: ReactNode
  current: number
  value: number
  disabled?: boolean
  onClick?: (e: MouseEvent<any>, value: number) => void
}

export interface PaginationTitleItemProps {
  title: string
  subtitle: string
  current: number
  value: number
  onClick?: (e: MouseEvent<any>, value: number) => void
}

export interface PaginationTitle {
  title: string
  subtitle: string
}

export interface PaginationBaseProps {
  current: number
  onClick?: (e: MouseEvent<any>, page: number) => void
}

export interface PaginationAttrProps extends PaginationBaseProps {
  label?: {
    previous: ReactNode
    next: ReactNode
    skip: ReactNode
  }
  total: number
  each?: number
}

export interface PaginationTitleProps extends PaginationBaseProps {
  title: {
    prev: PaginationTitle
    next: PaginationTitle
  }
}

export interface PaginationChildrenProps extends PaginationBaseProps {
  children: ReactNode
}

export type PaginationProps =
  | PaginationAttrProps
  | PaginationTitleProps
  | PaginationChildrenProps
