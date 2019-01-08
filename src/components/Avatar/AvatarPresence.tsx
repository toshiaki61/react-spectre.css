import React, {FC} from 'react'

import cx from 'classnames'
import {AvatarPresenceProps} from './interfaces'

const AvatarPresence: FC<AvatarPresenceProps> = ({presence}) => (
  <i className={cx('avatar-presence', presence)} />
)

export default AvatarPresence
