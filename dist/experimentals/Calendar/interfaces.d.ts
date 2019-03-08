import { MouseEvent, MouseEventHandler, ReactNode } from 'react';
import { BasePartProps } from 'src/interfaces';
export declare type DateLike = Date | string | number;
export declare type MouseEventDateLikeHandler = (e: MouseEvent<any>, m: DateLike) => void;
export interface CalendarRange {
    start: DateLike;
    end: DateLike;
}
export declare type CalendarDataType = 'badge' | 'disabled' | 'today';
export interface CalendarData {
    date: DateLike;
    tooltip: string;
    type?: CalendarDataType;
}
export declare type CalendarHeaderProps = Partial<BasePartProps>;
export declare type CalendarNavProps = Partial<BasePartProps>;
export declare type CalendarContainerProps = Partial<BasePartProps>;
export declare type CalendarBodyProps = Partial<BasePartProps>;
export declare type CalendarDateProps = Partial<BasePartProps>;
export interface CalendarNavDetail {
    onClick: MouseEventHandler;
    children?: ReactNode;
}
export interface CalendarNav {
    current: string;
    prev: CalendarNavDetail;
    next: CalendarNavDetail;
}
export interface CalendarOptions {
    data: CalendarData[];
    range: CalendarRange[];
}
export interface CalendarDateItemProps {
    children: ReactNode;
    active?: boolean;
    disabled?: boolean;
    badge?: boolean;
    today?: boolean;
    onClick: MouseEventHandler;
}
export interface CalendarBaseProps {
    lg?: boolean;
}
export interface CalendarAttrProps extends CalendarBaseProps {
    nav: CalendarNav;
    weekdays: string[];
    /** Date | string | number */
    current: DateLike;
    options?: CalendarOptions;
    formatDate?: (date: DateLike) => string;
    onDateClick?: MouseEventDateLikeHandler;
}
export interface CalendarChildrenProps extends CalendarBaseProps {
    children: ReactNode;
}
export declare type CalendarProps = CalendarAttrProps | CalendarChildrenProps;
