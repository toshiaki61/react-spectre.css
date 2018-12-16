import React from 'react';
export interface IAvatarIconProps {
    src: string;
    alt?: string;
    className?: string;
}
export interface IPresenceProps {
    presence: string;
}
export interface IAvatarProps {
    className?: string;
    xl?: boolean;
    lg?: boolean;
    sm?: boolean;
    xs?: boolean;
    initial?: string;
    src?: string;
    icon?: IAvatarIconProps;
    alt?: string;
    presence?: '' | 'online' | 'offline' | 'away' | 'busy';
}
declare const Avatar: {
    ({ className, xl, lg, sm, xs, initial, src, icon, alt, presence, ...props }: IAvatarProps): React.ReactElement<IAvatarProps>;
    defaultProps: {
        className: string;
        xl: boolean;
        lg: boolean;
        sm: boolean;
        xs: boolean;
        initial: string;
        img: string;
        icon: undefined;
        alt: string;
        presence: string;
    };
};
export default Avatar;
