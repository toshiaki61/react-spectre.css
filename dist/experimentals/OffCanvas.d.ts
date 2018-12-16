import React, { ReactElement } from 'react';
export interface ISidebarProps {
    className?: string;
    content: Array<ReactElement<any>> | ReactElement<any> | string;
}
export interface IOffCanvasProps {
    children: Array<ReactElement<any>> | ReactElement<any>;
    sidebar: ISidebarProps;
}
declare const OffCanvas: ({ children, sidebar, ...props }: IOffCanvasProps) => React.ReactElement<IOffCanvasProps>;
export default OffCanvas;
