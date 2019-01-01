import {MouseEventHandler, ReactNode} from 'react'

interface BaseProps {
  className?: string
  children?: ReactNode
}

export type SortCompareFunc = <T>(a: T, b: T) => number
export type TableCellDecorator = <T, K extends keyof T>(
  cellData: T[K],
  reactKey: string,
  datum: T
) => ReactNode

export interface TableColumn<T> {
  children: any
  dataCellDecorator?: TableCellDecorator
  disableSorting?: boolean
  key: keyof T
  sortCompareAsc?: SortCompareFunc
  sortCompareDesc?: SortCompareFunc
  headingProps?: TableHeadingProps
}

export type RowClickHandler = <T>(datum: T) => void

export interface TableProps<T> extends BaseProps {
  columns: Array<keyof T | TableColumn<T>>
  data: T[]
  striped?: boolean
  hover?: boolean
  scroll?: boolean
  header?: boolean
  onRowClick?: RowClickHandler
}

export enum TableSortDirection {
  ASC = 'asc',
  DESC = 'desc',
}

export type TableDataProps = BaseProps

export type TableHeaderProps = BaseProps

export type TableBodyProps = BaseProps

export interface TableHeadingProps extends BaseProps {
  onClick?: MouseEventHandler
  sortDirection?: TableSortDirection
}

export interface TableRowProps extends BaseProps {
  onClick?: RowClickHandler
}
