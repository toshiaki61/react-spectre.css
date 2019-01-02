export type AvatarSize = 'xl' | 'lg' | 'sm' | 'xs'

export type AvatarPresence = 'online' | 'offline' | 'away' | 'busy'

export interface AvatarIconProps {
  src: string
  alt?: string
  className?: string
}

export interface AvatarPresenceProps {
  presence: AvatarPresence
}

export interface AvatarProps {
  className?: string
  size?: AvatarSize
  initial?: string
  src?: string
  icon?: AvatarIconProps
  alt?: string
  presence?: AvatarPresence
}
