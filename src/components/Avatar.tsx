import classnames from 'classnames'
import React, {ReactElement} from 'react'

export interface IAvatarIconProps {
  src: string
  alt?: string
  className?: string
}
const AvatarIcon = ({
  className,
  alt,
  ...props
}: IAvatarIconProps): ReactElement<IAvatarIconProps> => {
  const classes = classnames('avatar-icon', className)
  return <img className={classes} alt={alt} {...props} />
}
AvatarIcon.defaultProps = {
  alt: '',
  className: '',
}
export interface IPresenceProps {
  presence: string
}
const Presence = ({presence}: IPresenceProps): ReactElement<IPresenceProps> => (
  <i className={classnames('avatar-presence', presence)} />
)
export interface IAvatarProps {
  className?: string
  xl?: boolean
  lg?: boolean
  sm?: boolean
  xs?: boolean
  initial?: string
  src?: string
  icon?: IAvatarIconProps
  alt?: string
  presence?: '' | 'online' | 'offline' | 'away' | 'busy'
}
const Avatar = ({
  className,
  xl,
  lg,
  sm,
  xs,
  initial,
  src,
  icon,
  alt,
  presence,
  ...props
}: IAvatarProps): ReactElement<IAvatarProps> => {
  const classes = classnames(
    'avatar',
    {
      'avatar-xl': xl,
      'avatar-lg': lg,
      'avatar-sm': sm,
      'avatar-xs': xs,
    },
    className
  )
  return (
    <figure className={classes} data-initial={initial} {...props}>
      {src ? <img src={src} alt={alt} /> : null}
      {icon ? (
        <Avatar
          className="avatar-icon"
          initial={initial}
          src={icon.src}
          alt={icon.alt}
        />
      ) : null}
      {presence ? <Presence presence={presence} /> : null}
    </figure>
  )
}
Avatar.defaultProps = {
  className: '',
  xl: false,
  lg: false,
  sm: false,
  xs: false,
  initial: '',
  img: '',
  icon: undefined,
  alt: '',
  presence: '',
}
export default Avatar
