import React, { CSSProperties, ReactElement } from 'react';
export interface IItemProps {
    small?: boolean;
    tooltip?: string;
    content?: ReactElement<any> | string;
}
interface IProgressBarItemProps extends IItemProps {
    value?: string | number;
    role?: string;
    style?: CSSProperties;
    content?: ReactElement<any> | string;
    'aria-valuenow'?: number;
    'aria-valuemin'?: number;
    'aria-valuemax'?: number;
}
export interface IBarProps {
    className?: string;
    small?: boolean;
    slider?: boolean;
    items: IProgressBarItemProps[];
}
declare const Bar: {
    ({ className, small, slider, items, }: IBarProps): React.ReactElement<IBarProps>;
    defaultProps: {
        className: string;
        small: boolean;
        slider: boolean;
    };
};
export default Bar;
