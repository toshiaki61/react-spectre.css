import classnames from 'classnames'
import React, {MouseEvent, ReactElement} from 'react'

import Button from '../elements/Button'
import noop from '../utilities/noop'
import Avatar, {IAvatarProps} from './Avatar'

interface IChipProps {
  className?: string
  clear?: boolean
  icon?: ReactElement<any>
  avatar?: IAvatarProps
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
}: IChipProps): ReactElement<IChipProps> => {
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
