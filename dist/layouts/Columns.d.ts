import React, { CSSProperties, ReactNode, ReactNodeArray } from 'react';
interface IColumnsVisualProps {
    gapless?: boolean;
    oneline?: boolean;
    style?: CSSProperties;
    className?: string;
}
export interface IColumnsWithoutContainerProps extends IColumnsVisualProps {
    children: ReactNode | ReactNodeArray;
    className?: string;
}
export declare function acquireContainerProps(option: boolean | string | object): object | null;
export interface IContainerProps {
    className?: string;
    xs?: boolean;
    sm?: boolean;
    md?: boolean;
    lg?: boolean;
    xl?: boolean;
}
export interface IColumnsProps extends IColumnsVisualProps {
    children: ReactNode | ReactNodeArray;
    container?: boolean | string | IContainerProps;
}
declare const Columns: {
    ({ children, container, ...props }: IColumnsProps): React.ReactElement<IColumnsProps>;
    defaultProps: {
        container: boolean;
    };
};
export default Columns;
