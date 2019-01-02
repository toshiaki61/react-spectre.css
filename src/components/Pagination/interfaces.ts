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

export interface PaginationTitleProps {
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

export interface PaginationProps {
  label?: {
    previous: ReactNode
    next: ReactNode
    skip: ReactNode
  }
  total: number
  current: number
  each?: number
  title?: {
    prev: PaginationTitle
    next: PaginationTitle
  }
  onClick?: (e: MouseEvent<any>, page: number) => void
}
