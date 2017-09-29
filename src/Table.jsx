/* @flow */
import React from 'react';
import classnames from 'classnames';

export type TableProps = {
  header: Array<string>,
  contents: Array<Array<string>>,
  className: string,
  striped: boolean,
  hover: boolean,
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
          <th>Name</th>
          <th>Genre</th>
          <th>Release date</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>The Shawshank Redemption</td>
          <td>Crime, Drama</td>
          <td>14 October 1994</td>
        </tr>
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
