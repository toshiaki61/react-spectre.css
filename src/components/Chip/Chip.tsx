import React, {Fragment, SFC} from 'react'

import cx from 'classnames'

import {Avatar} from '@components/Avatar'
import {Button} from '@elements/Button'

import {ChipProps} from './interfaces'
import {hasChipChildren} from './util'

import ChipWrapper from './ChipWrapper'

function renderChip(p: ChipProps) {
  if (hasChipChildren(p)) {
    return p.children
  }
  const {clear, icon, avatar, onClearClick} = p
  return (
    <Fragment>
      {icon}
      {avatar ? <Avatar size="sm" {...avatar} /> : null}
      {p.content}
      {clear ? <Button clearButton onClick={onClearClick} /> : null}
    </Fragment>
  )
}
const Chip: SFC<ChipProps> = p => {
  const {htmlFor, className} = p
  return (
    <ChipWrapper htmlFor={htmlFor} className={cx('chip', className)}>
      {renderChip(p)}
    </ChipWrapper>
  )
}

export default Chip
