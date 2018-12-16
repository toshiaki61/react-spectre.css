import React from 'react';
export interface IMeterProps {
    value: number;
    optimum?: number;
    min?: number;
    max?: number;
    low?: number;
    high?: number;
}
declare const Meter: {
    ({ value, ...props }: IMeterProps): React.ReactElement<IMeterProps>;
    defaultProps: {
        min: number;
        max: number;
    };
};
export default Meter;
