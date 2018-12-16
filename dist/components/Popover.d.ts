import React, { ReactElement } from 'react';
export interface IPopoverProps {
    target: ReactElement<any>;
    children: ReactElement<any>;
    right?: boolean;
    left?: boolean;
    bottom?: boolean;
    className?: string;
}
declare const Popover: {
    ({ target, children, right, left, bottom, className, }: IPopoverProps): React.ReactElement<IPopoverProps>;
    defaultProps: {
        right: boolean;
        left: boolean;
        bottom: boolean;
        className: string;
    };
};
export default Popover;
