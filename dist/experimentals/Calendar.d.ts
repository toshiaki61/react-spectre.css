import React, { MouseEvent } from 'react';
import noop from '../utilities/noop';
export interface INavProps {
    current: Date | string | number;
    navFormat?: string;
    onMonthClick?: (e: MouseEvent<any>, m: Date | string | number) => void;
}
export interface IHeaderProps {
    weekdays: string[];
}
export interface IBodyProps {
    current: Date | string | number;
    start: Date | string | number;
    end: Date | string | number;
    options?: {
        data: Array<{
            date: string;
            tooltip: string;
            type?: 'badge' | 'disabled' | 'today';
        }>;
        range: Array<{
            start: string;
            end: string;
        }>;
    };
    dateFormat?: string;
    onDateClick: (e: MouseEvent<any>, d: Date) => void;
}
interface ICalendarProps extends INavProps, IHeaderProps {
    start?: Date | string | number;
    end?: Date | string | number;
    options?: {
        data: Array<{
            date: string;
            tooltip: string;
            type?: 'badge' | 'disabled' | 'today';
        }>;
        range: Array<{
            start: string;
            end: string;
        }>;
    };
    onDateClick: (e: MouseEvent<any>, d: Date) => void;
    lg?: boolean;
}
declare const Calendar: {
    ({ navFormat, start, end, options, onMonthClick, onDateClick, current, weekdays, lg, ...props }: ICalendarProps): React.ReactElement<ICalendarProps> | null;
    defaultProps: {
        options: {
            data: never[];
            range: never[];
        };
        dateFormat: string;
        onMonthClick: typeof noop;
        navFormat: string;
    };
};
export default Calendar;
