/// <reference types="react" />
import { TableProps } from './interfaces';
declare function Table<T>({ data, className, striped, hover, scroll, children, ...rest }: TableProps<T>): JSX.Element;
declare namespace Table {
    var defaultProps: {
        className: string;
        hover: boolean;
        striped: boolean;
        scroll: boolean;
        header: boolean;
    };
}
export default Table;
