import React, {Fragment, ReactElement} from 'react'

import cx from 'classnames'

import {Button} from '@elements/Button'

import {Avatar} from '../Avatar'

import {ChipProps} from './interfaces'

const Chip = ({
  clear,
  icon,
  avatar,
  content,
  className,
  onClearClick,
  children,
}: ChipProps): ReactElement<ChipProps> => (
  <span className={cx('chip', className)}>
    {children ? (
      children
    ) : (
      <Fragment>
        {icon}
        {avatar ? <Avatar size="sm" {...avatar} /> : null}
        {content}
        {clear ? <Button clear onClick={onClearClick} /> : null}
      </Fragment>
    )}
  </span>
)

Chip.defaultProps = {
  className: '',
  clear: false,
  icon: null,
  avatar: null,
  content: '',
}

export default Chip
