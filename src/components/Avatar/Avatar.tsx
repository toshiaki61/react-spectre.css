import * as React from 'react'

import cx from 'clsx'

import AvatarIcon from './AvatarIcon'
import AvatarPresence from './AvatarPresence'
import {AvatarProps} from './interfaces'

const Avatar: React.FC<AvatarProps> = ({
  className,
  initial,
  src,
  alt,
  size,
  icon,
  presence,
}) => {
  return (
    <figure
      className={cx(
        'avatar',
        {
          [`avatar-${size}`]: size,
        },
        className
      )}
      data-initial={initial}
    >
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
  initial: '',
  icon: undefined,
  alt: '',
}
export default Avatar
