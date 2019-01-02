import React, {ReactElement} from 'react'

import cx from 'classnames'
import {AvatarIconProps} from './interfaces'

const AvatarIcon = ({
  className,
  alt,
  ...props
}: AvatarIconProps): ReactElement<AvatarIconProps> => {
  const classes = cx('avatar-icon', className)
  return <img className={classes} alt={alt} {...props} />
}
AvatarIcon.defaultProps = {
  alt: '',
  className: '',
}

export default AvatarIcon
