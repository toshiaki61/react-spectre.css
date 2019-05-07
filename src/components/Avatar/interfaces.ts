export type AvatarSizeType = 'xl' | 'lg' | 'sm' | 'xs'

export type AvatarPresenceType = 'online' | 'offline' | 'away' | 'busy'

export interface AvatarIconProps {
  src: string
  alt?: string
  className?: string
}

export interface AvatarPresenceProps {
  presence: AvatarPresenceType
}

export interface AvatarProps {
  className?: string
  /** 'xl' | 'lg' | 'sm' | 'xs' */
  size?: AvatarSizeType
  initial?: string
  src?: string
  icon?: AvatarIconProps
  alt?: string
  /** 'online' | 'offline' | 'away' | 'busy' */
  presence?: AvatarPresenceType
}
