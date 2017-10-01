/* @flow */
import React from 'react';
import classnames from 'classnames';

export type TableProps = {
  header: Array<string>,
  contents: Array<Array<string>>,
  className?: string,
  striped?: boolean,
  hover?: boolean,
};
const Table = ({ header, contents, className, striped, hover, ...props }: TableProps) => {
  const classes = classnames(
    'table',
    {
      'table-striped': striped,
      'table-hover': hover,
    },
    className,
  );
  return (
    <table className={classes} {...props}>
      <thead>
        <tr>
          {header.map((row, i) => (
            <th>{row}</th>
          ))}
        </tr>
      </thead>
      <tbody>
        {contents.map((content, i) => (
          <tr>
            {content.map((column, j) => (
              <td>{column}</td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
};
Table.defaultProps = {
  className: '',
  striped: false,
  hover: false,
};

export default Table;
