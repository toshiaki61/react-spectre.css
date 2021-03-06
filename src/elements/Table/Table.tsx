import * as React from 'react'

import cx from 'clsx'

// table components
import {TableProps} from './interfaces'
import {isTableCloumn} from './util'

import Body from './TableBody'
import Data from './TableData'
import Header from './TableHeader'
import Heading from './TableHeading'
import Row from './TableRow'

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
    <React.Fragment>
      {renderTableHeader<T>({header, columns})}
      {renderTableBody({columns, data, onRowClick})}
    </React.Fragment>
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
}: TableProps<T>) {
  return (
    <table
      className={cx(
        'table',
        {
          'table-striped': striped,
          'table-hover': hover,
          'table-scroll': scroll,
        },
        className
      )}
    >
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
