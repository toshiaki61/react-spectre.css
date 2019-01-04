import React, {Fragment, ReactElement} from 'react'

import cx from 'classnames'

import {Button} from '@elements/Button'

import {Avatar} from '../Avatar'

import {ChipProps} from './interfaces'

import ChipWrapper from './ChipWrapper'

const Chip = ({
  children,
  htmlFor,
  clear,
  icon,
  avatar,
  content,
  className,
  onClearClick,
}: ChipProps): ReactElement<ChipProps> => (
  <ChipWrapper htmlFor={htmlFor} className={cx('chip', className)}>
    {children ? (
      children
    ) : (
      <Fragment>
        {icon}
        {avatar ? <Avatar size="sm" {...avatar} /> : null}
        {content}
        {clear ? <Button clearButton onClick={onClearClick} /> : null}
      </Fragment>
    )}
  </ChipWrapper>
)

Chip.defaultProps = {
  className: '',
  clear: false,
  icon: null,
  avatar: null,
  content: '',
}

export default Chip
