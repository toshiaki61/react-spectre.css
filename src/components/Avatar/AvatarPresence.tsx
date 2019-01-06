import React, {SFC} from 'react'

import cx from 'classnames'
import {AvatarPresenceProps} from './interfaces'

const AvatarPresence: SFC<AvatarPresenceProps> = ({presence}) => (
  <i className={cx('avatar-presence', presence)} />
)

export default AvatarPresence
