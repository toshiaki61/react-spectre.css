import React, { MouseEvent, ReactElement } from 'react';
import noop from '../utilities/noop';
import { IAvatarProps } from './Avatar';
interface IChipProps {
    className?: string;
    clear?: boolean;
    icon?: ReactElement<any>;
    avatar?: IAvatarProps;
    content?: string;
    onClearClick?: (e: MouseEvent<any>) => void;
}
declare const Chip: {
    ({ clear, icon, avatar, content, className, onClearClick, ...props }: IChipProps): React.ReactElement<IChipProps>;
    defaultProps: {
        className: string;
        clear: boolean;
        icon: null;
        avatar: null;
        content: string;
        onClearClick: typeof noop;
    };
};
export default Chip;
