import React, {ReactElement, MouseEvent} from 'react'
import classnames from 'classnames'
import noop from 'lodash.noop'

import Avatar, {AvatarProps} from './Avatar'
import Button from '../elements/Button'

interface ChipProps {
  className?: string
  clear?: boolean
  icon?: ReactElement<any>
  avatar?: AvatarProps
  content?: string
  onClearClick?: (e: MouseEvent<any>) => void
}
const Chip = ({
  clear,
  icon,
  avatar,
  content,
  className,
  onClearClick,
  ...props
}: ChipProps): ReactElement<ChipProps> => {
  const classes = classnames('chip', className)
  return (
    <span className={classes} {...props}>
      {icon}
      {avatar ? <Avatar sm {...avatar} /> : null}
      {content}
      {clear ? <Button clear onClick={onClearClick} /> : null}
    </span>
  )
}
Chip.defaultProps = {
  className: '',
  clear: false,
  icon: null,
  avatar: null,
  content: '',
  onClearClick: noop,
}

export default Chip
