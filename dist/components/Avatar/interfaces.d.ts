export declare type AvatarSizeType = 'xl' | 'lg' | 'sm' | 'xs';
export declare type AvatarPresenceType = 'online' | 'offline' | 'away' | 'busy';
export interface AvatarIconProps {
    src: string;
    alt?: string;
    className?: string;
}
export interface AvatarPresenceProps {
    presence: AvatarPresenceType;
}
export interface AvatarProps {
    className?: string;
    size?: AvatarSizeType;
    initial?: string;
    src?: string;
    icon?: AvatarIconProps;
    alt?: string;
    presence?: AvatarPresenceType;
}
