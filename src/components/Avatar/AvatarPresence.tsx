import React, {ReactElement} from 'react'

import cx from 'classnames'
import {AvatarPresenceProps} from './interfaces'

const AvatarPresence = ({
  presence,
}: AvatarPresenceProps): ReactElement<AvatarPresenceProps> => (
  <i className={cx('avatar-presence', presence)} />
)

export default AvatarPresence
