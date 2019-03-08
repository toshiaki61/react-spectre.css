import { ReactNode } from 'react';
import { BasePartProps } from '../../interfaces';
export interface OffCanvasSidebarProps {
    children: ReactNode;
    className?: string;
    id: string;
}
export interface OffCanvasAttrProps {
    sidebarId: string;
    sidebarContent?: ReactNode;
    content?: ReactNode;
}
export interface OffCanvasChildrenProps {
    children: ReactNode;
}
export declare type OffCanvasProps = OffCanvasAttrProps | OffCanvasChildrenProps;
export declare type OffCanvasContentProps = Partial<BasePartProps>;
export interface OffCanvasToggleProps {
    children: ReactNode;
    sidebarId: string;
}
