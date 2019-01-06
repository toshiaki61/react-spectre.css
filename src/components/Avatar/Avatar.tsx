import React, {SFC} from 'react'

import cx from 'classnames'

import AvatarIcon from './AvatarIcon'
import AvatarPresence from './AvatarPresence'
import {AvatarProps} from './interfaces'

const Avatar: SFC<AvatarProps> = ({
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
