import React from 'react';
export interface IProgressProps {
    max?: number;
}
declare const Progress: {
    ({ max, ...props }: IProgressProps): React.ReactElement<IProgressProps>;
    defaultProps: {
        max: number;
    };
};
export default Progress;
