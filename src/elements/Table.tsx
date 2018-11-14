import classnames from 'classnames'
import React, {ReactElement} from 'react'

export interface ITableProps {
  header: string[]
  contents: string[][]
  className?: string
  striped?: boolean
  hover?: boolean
}
const Table = ({
  header,
  contents,
  className,
  striped,
  hover,
  ...props
}: ITableProps): ReactElement<ITableProps> => {
  const classes = classnames(
    'table',
    {
      'table-striped': striped,
      'table-hover': hover,
    },
    className
  )
  return (
    <table className={classes} {...props}>
      <thead>
        <tr>
          {header.map((row, i) => {
            const key = `header-${i}`
            return <th key={key}>{row}</th>
          })}
        </tr>
      </thead>
      <tbody>
        {contents.map((content, i) => {
          const rowKey = `row-${i}`
          return (
            <tr key={rowKey}>
              {content.map((column, j) => {
                const columnKey = `column-${j}`
                return <td key={columnKey}>{column}</td>
              })}
            </tr>
          )
        })}
      </tbody>
    </table>
  )
}
Table.defaultProps = {
  className: '',
  striped: false,
  hover: false,
}
export default Table
