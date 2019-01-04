import {ReactNode, ReactNodeArray} from 'react'

export interface ColumnsProps {
  children: ReactNode | ReactNodeArray
  className?: string
  gapless?: boolean
  oneline?: boolean
}

export type ColumnSize = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12

export type ColumnOffset = 'mx' | 'ml' | 'mr'

export interface ColumnProps {
  children: ReactNode
  className?: string
  xs?: ColumnSize
  sm?: ColumnSize
  md?: ColumnSize
  lg?: ColumnSize
  xl?: ColumnSize
  size?: ColumnSize
  offset?: ColumnOffset
  autoWidth?: boolean
  autoWidthXl?: boolean
  autoWidthLg?: boolean
  autoWidthMd?: boolean
  autoWidthSm?: boolean
  autoWidthXs?: boolean
}
