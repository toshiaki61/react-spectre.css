import { CSSProperties, MouseEvent, ReactNode } from 'react';
export declare const LinkHash = "#";
export interface StyleProps {
    className: string;
    style: CSSProperties;
}
export interface BasePartProps extends Partial<StyleProps> {
    children: ReactNode;
}
export declare type MouseEventIdHandler = (e: MouseEvent<any>, id: string) => void;
