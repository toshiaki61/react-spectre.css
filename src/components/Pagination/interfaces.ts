import * as React from 'react'

export interface Page {
  label: React.ReactNode
  value: number
}

export interface PaginationItemProps {
  label: React.ReactNode
  current: number
  value: number
  disabled?: boolean
  onClick?: (e: React.MouseEvent<any>, value: number) => void
}

export interface PaginationTitleItemProps {
  title: string
  subtitle: string
  current: number
  value: number
  onClick?: (e: React.MouseEvent<any>, value: number) => void
}

export interface PaginationTitle {
  title: string
  subtitle: string
}

export interface PaginationBaseProps {
  current: number
  onClick?: (e: React.MouseEvent<any>, page: number) => void
}

export interface PaginationAttrProps extends PaginationBaseProps {
  label?: {
    previous: React.ReactNode
    next: React.ReactNode
    skip: React.ReactNode
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
  children: React.ReactNode
}

export type PaginationProps =
  | PaginationAttrProps
  | PaginationTitleProps
  | PaginationChildrenProps
