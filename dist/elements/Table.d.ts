import React from 'react';
export interface ITableProps {
    header: string[];
    contents: string[][];
    className?: string;
    striped?: boolean;
    hover?: boolean;
}
declare const Table: {
    ({ header, contents, className, striped, hover, ...props }: ITableProps): React.ReactElement<ITableProps>;
    defaultProps: {
        className: string;
        striped: boolean;
        hover: boolean;
    };
};
export default Table;
