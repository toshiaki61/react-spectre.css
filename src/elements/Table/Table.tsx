import React, {Fragment, ReactElement} from 'react'

import cx from 'classnames'

// table components
import {TableColumn, TableProps} from './interfaces'
import Body from './TableBody'
import Data from './TableData'
import Header from './TableHeader'
import Heading from './TableHeading'
import Row from './TableRow'

function isTableCloumn<T>(item: any): item is TableColumn<T> {
  return item.children || item.headingProps
}
function renderTableHeader<T>({header, columns}: Partial<TableProps<T>>) {
  return (
    header &&
    columns && (
      <Header>
        <Row>
          {columns.map((column, i) => {
            const reactKey = `row-${i}-key-${i}`
            if (isTableCloumn<T>(column)) {
              const {headingProps = {}} = column
              return (
                <Heading key={reactKey} {...headingProps}>
                  {column.children}
                </Heading>
              )
            }
            return <Heading key={reactKey}>{column}</Heading>
          })}
        </Row>
      </Header>
    )
  )
}
function renderTableBody<T>({
  columns,
  data,
  onRowClick,
}: Partial<TableProps<T>>) {
  return (
    columns &&
    data && (
      <Body>
        {data.map((datum, i) => (
          <Row
            key={`row-${i}`}
            onClick={onRowClick && (() => onRowClick(datum))}
          >
            {columns.map((column, k) => {
              if (isTableCloumn<T>(column)) {
                const cellData = datum[column.key]
                const decorator = column.dataCellDecorator
                const key = `row-${i}-key-${k}`
                return decorator ? (
                  decorator(cellData, key, datum)
                ) : (
                  <Data key={key}>{cellData}</Data>
                )
              }
              return <Data key={`row-${i}-key-${k}`}>{datum[column]}</Data>
            })}
          </Row>
        ))}
      </Body>
    )
  )
}
function renderTableContent<T>({
  columns,
  data,
  header,
  onRowClick,
}: Partial<TableProps<T>>) {
  return (
    <Fragment>
      {renderTableHeader<T>({header, columns})}
      {renderTableBody({columns, data, onRowClick})}
    </Fragment>
  )
}
function Table<T>({
  data,
  className = '',
  striped = true,
  hover = true,
  scroll = false,
  children,
  ...rest
}: TableProps<T>): ReactElement<TableProps<T>> {
  const classes = cx(
    'table',
    {
      'table-striped': striped,
      'table-hover': hover,
      'table-scroll': scroll,
    },
    className
  )
  return (
    <table className={classes}>
      {data ? renderTableContent({...rest, data}) : children}
    </table>
  )
}

Table.defaultProps = {
  className: '',
  hover: true,
  striped: true,
  scroll: false,
  header: true,
}

export default Table
