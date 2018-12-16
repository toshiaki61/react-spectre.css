import React, { ReactChildren } from 'react';
export interface IDividerProps {
    children?: ReactChildren;
    content?: string;
    vertical?: boolean;
    li?: boolean;
    center?: boolean;
    className?: string;
}
declare const Divider: {
    ({ children, content, vertical, li, center, className, }: IDividerProps): React.ReactElement<IDividerProps>;
    defaultProps: {
        children: null;
        vertical: boolean;
        li: boolean;
        center: boolean;
        className: string;
    };
};
export default Divider;
