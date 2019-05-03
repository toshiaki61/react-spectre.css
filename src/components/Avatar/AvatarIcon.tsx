import * as React from 'react'

import cx from 'clsx'
import {AvatarIconProps} from './interfaces'

const AvatarIcon: React.FC<AvatarIconProps> = ({className, alt, ...props}) => (
  <img className={cx('avatar-icon', className)} alt={alt} {...props} />
)

AvatarIcon.defaultProps = {
  alt: '',
  className: '',
}

export default AvatarIcon
