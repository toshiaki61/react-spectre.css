import * as React from 'react'

import cx from 'clsx'
import {AvatarPresenceProps} from './interfaces'

const AvatarPresence: React.FC<AvatarPresenceProps> = ({presence}) => (
  <i className={cx('avatar-presence', presence)} />
)

export default AvatarPresence
