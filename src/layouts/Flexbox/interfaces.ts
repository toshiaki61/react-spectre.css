import * as React from 'react'
import {StyleProps} from '../../interfaces'

export interface ColumnsProps extends Partial<StyleProps> {
  children: React.ReactNode | React.ReactNodeArray
  gapless?: boolean
  oneline?: boolean
}

export type ColumnSizeType = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12

export type ColumnOffsetType = 'mx' | 'ml' | 'mr'

export interface ColumnProps extends Partial<StyleProps> {
  children: React.ReactNode
  /** 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12 */
  xs?: ColumnSizeType
  /** 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12 */
  sm?: ColumnSizeType
  /** 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12 */
  md?: ColumnSizeType
  /** 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12 */
  lg?: ColumnSizeType
  /** 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12 */
  xl?: ColumnSizeType
  /** 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12 */
  size?: ColumnSizeType
  /** 'mx' | 'ml' | 'mr' */
  offset?: ColumnOffsetType
  autoWidth?: boolean
  autoWidthXl?: boolean
  autoWidthLg?: boolean
  autoWidthMd?: boolean
  autoWidthSm?: boolean
  autoWidthXs?: boolean
}
