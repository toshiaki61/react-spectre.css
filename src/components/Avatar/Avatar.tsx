import React, {ReactElement} from 'react'

import cx from 'classnames'

import AvatarIcon from './AvatarIcon'
import AvatarPresence from './AvatarPresence'
import {AvatarProps} from './interfaces'

const Avatar = ({
  className,
  initial,
  src,
  alt,
  size,
  icon,
  presence,
}: AvatarProps): ReactElement<AvatarProps> => {
  const classes = cx(
    'avatar',
    {
      [`avatar-${size}`]: size,
    },
    className
  )
  return (
    <figure className={classes} data-initial={initial}>
      {src ? <img src={src} alt={alt} /> : null}
      {icon ? (
        <AvatarIcon {...icon} />
      ) : presence ? (
        <AvatarPresence presence={presence} />
      ) : null}
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
