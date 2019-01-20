import { MouseEventHandler, ReactNode } from 'react';
interface BaseProps {
    className?: string;
    children?: ReactNode;
}
export declare type SortCompareFunc = <T>(a: T, b: T) => number;
export declare type TableCellDecorator = <T, K extends keyof T>(cellData: T[K], reactKey: string, datum: T) => ReactNode;
export interface TableColumn<T> {
    children: any;
    dataCellDecorator?: TableCellDecorator;
    disableSorting?: boolean;
    key: keyof T;
    sortCompareAsc?: SortCompareFunc;
    sortCompareDesc?: SortCompareFunc;
    headingProps?: TableHeadingProps;
}
export declare type RowClickHandler = <T>(datum: T) => void;
export interface TableProps<T> extends BaseProps {
    columns: Array<keyof T | TableColumn<T>>;
    data: T[];
    striped?: boolean;
    hover?: boolean;
    scroll?: boolean;
    header?: boolean;
    onRowClick?: RowClickHandler;
}
export declare enum TableSortDirection {
    ASC = "asc",
    DESC = "desc"
}
export declare type TableDataProps = BaseProps;
export declare type TableHeaderProps = BaseProps;
export declare type TableBodyProps = BaseProps;
export interface TableHeadingProps extends BaseProps {
    onClick?: MouseEventHandler;
    sortDirection?: TableSortDirection;
}
export interface TableRowProps extends BaseProps {
    onClick?: RowClickHandler;
}
export {};
