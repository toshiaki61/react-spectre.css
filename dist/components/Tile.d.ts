import React, { CSSProperties, ReactElement, ReactNode, ReactNodeArray } from 'react';
export interface ITileProps {
    compact?: boolean;
    title?: ReactNode;
    subtitle?: ReactNode;
    content?: ReactNode | ReactNodeArray;
    icon?: ReactElement<any> | string;
    style?: CSSProperties;
    action?: ReactElement<any>;
}
declare const Tile: {
    ({ compact, title, subtitle, content, icon, style, action, }: ITileProps): React.ReactElement<ITileProps>;
    defaultProps: {
        compact: boolean;
        title: string;
        subtitle: string;
        content: string;
        icon: null;
        action: null;
    };
};
export default Tile;
