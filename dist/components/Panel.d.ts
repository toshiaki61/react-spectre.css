import React, { ReactElement, ReactNode } from 'react';
export interface IPanelProps {
    header?: ReactElement<any>;
    nav?: ReactElement<any>;
    content?: ReactNode;
    footer?: ReactElement<any> | string;
    headerClass?: string;
    className?: string;
}
declare const Panel: {
    ({ header, nav, content, footer, headerClass, className, }: IPanelProps): React.ReactElement<IPanelProps>;
    defaultProps: {
        header: null;
        nav: null;
        content: null;
        footer: null;
        headerClass: string;
    };
};
export default Panel;
