import React, {SFC} from 'react'

import cx from 'classnames'
import {AvatarIconProps} from './interfaces'

const AvatarIcon: SFC<AvatarIconProps> = ({className, alt, ...props}) => (
  <img className={cx('avatar-icon', className)} alt={alt} {...props} />
)

AvatarIcon.defaultProps = {
  alt: '',
  className: '',
}

export default AvatarIcon
