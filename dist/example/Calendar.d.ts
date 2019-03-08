import { Component } from 'react';
interface ICalendarExampleState {
    active: boolean;
    current: Date | string | number;
}
declare class CalendarExample extends Component<any, ICalendarExampleState> {
    private weekdays;
    constructor(props: any);
    render(): JSX.Element;
}
export default CalendarExample;
