import React, { ReactNodeArray } from 'react';
export interface ITimelineProps {
    children: ReactNodeArray;
    timelines: string[];
}
declare const Timeline: {
    ({ children, timelines, }: ITimelineProps): React.ReactElement<ITimelineProps>;
    defaultProps: {};
};
export default Timeline;
