import React, { FocusEvent, MouseEvent } from 'react';
import { IItemProps as MenuItemProps } from './Menu';
export interface IDropdownProps {
    className?: string;
    active?: boolean;
    right?: boolean;
    initialValue?: string;
    contents: MenuItemProps[];
    onClick: (e: MouseEvent<any>) => void;
    onMenuClick: (e: MouseEvent<any>, id: string) => void;
    onBlur: (e: FocusEvent<any>) => void;
}
declare const Dropdown: {
    ({ className, active, right, initialValue, contents, onClick, onMenuClick, ...props }: IDropdownProps): React.ReactElement<IDropdownProps>;
    defaultProps: {
        className: string;
        active: boolean;
        right: boolean;
        initialValue: string;
    };
};
export default Dropdown;
