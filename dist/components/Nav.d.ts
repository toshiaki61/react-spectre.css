import React, { MouseEvent } from 'react';
import noop from '../utilities/noop';
export interface IItemProps {
    id: string;
    name: string;
    onClick?: (e: MouseEvent<any>, id: string) => void;
    active?: boolean;
    items?: IItemProps[];
}
export interface INavProps {
    items: IItemProps[];
    active?: string;
    onClick?: (e: MouseEvent<any>, id: string) => void;
}
declare const Nav: {
    ({ items, active, onClick }: INavProps): React.ReactElement<INavProps>;
    defaultProps: {
        active: string;
        onClick: typeof noop;
    };
};
export default Nav;
