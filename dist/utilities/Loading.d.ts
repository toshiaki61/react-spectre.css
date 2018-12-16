import React from 'react';
export interface ILoadingProps {
    large?: boolean;
    className?: string;
}
declare const Loading: {
    ({ large, className, }: ILoadingProps): React.ReactElement<ILoadingProps>;
    defaultProps: {
        large: boolean;
        className: string;
    };
};
export default Loading;
