import { CalendarChildrenProps, CalendarOptions, DateLike } from './interfaces';
export declare function isBeforeMonth(date: DateLike, target: DateLike): boolean;
export declare function isAfterMonth(date: DateLike, target: DateLike): boolean;
export declare function isBetween(date: DateLike, from: DateLike, to: DateLike, inclusivity?: string): boolean;
export declare const startOfCalendarWeek: (x0: string | number | Date) => Date;
export declare const endOfCalendarWeek: (x0: string | number | Date) => Date;
export declare function generateCalendarData(current: DateLike, options?: CalendarOptions): {
    date: Date;
    same: boolean;
    before: boolean;
    after: boolean;
    foundSameDay: import("./interfaces").CalendarData | undefined;
    foundBetween: import("./interfaces").CalendarRange | undefined;
    rangeStart: boolean | undefined;
    rangeEnd: boolean | undefined;
}[];
export declare function hasCalendarChildren(item: any): item is CalendarChildrenProps;
