import React, { MouseEvent, ReactElement } from 'react';
export interface ILinkProps {
    onClick: (e: MouseEvent<any>) => void;
    className?: string;
    'data-badge'?: number | string;
}
export interface ItemProps {
    id: string;
    name: string;
    badge?: number | string;
}
export interface ITabProps {
    items: ItemProps[];
    active?: string;
    onClick: (e: MouseEvent<any>, id: string) => void;
    action?: ReactElement<any>;
}
declare const Tab: {
    ({ items, active, onClick, action, }: ITabProps): React.ReactElement<ITabProps> | null;
    defaultProps: {
        active: string;
        action: null;
    };
};
export default Tab;
