import { MouseEventHandler, ReactNode } from 'react';
import { MouseEventIdHandler } from '../../interfaces';
export interface TabItemProps {
    title: ReactNode;
    active?: boolean;
    onClick?: MouseEventHandler;
    badge?: string | number;
}
export interface TabActionProps {
    children: ReactNode;
}
export interface TabBaseProps {
    block?: boolean;
}
export interface TabAttrProps extends TabBaseProps {
    items: Array<TabItemProps & {
        id: string;
    }>;
    onClick: MouseEventIdHandler;
    activeId?: string;
    action?: ReactNode;
    block?: boolean;
}
export interface TabChildrenProps extends TabBaseProps {
    children: ReactNode;
}
export declare type TabProps = TabAttrProps | TabChildrenProps;
