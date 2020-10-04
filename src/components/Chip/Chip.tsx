import * as React from 'react'

import cx from 'clsx'

import {Button} from '../../elements/Button'
import {Avatar} from '../Avatar'

import {ChipProps} from './interfaces'
import {hasChipChildren} from './util'

import ChipWrapper from './ChipWrapper'

function renderChip(p: ChipProps) {
  if (hasChipChildren(p)) {
    return p.children
  }
  const {clear, icon, avatar, onClearClick} = p
  return (
    <React.Fragment>
      {icon}
      {avatar ? <Avatar size="sm" {...avatar} /> : null}
      {p.content}
      {clear ? <Button clearButton onClick={onClearClick} /> : null}
    </React.Fragment>
  )
}
const Chip: React.FC<ChipProps> = p => {
  const {htmlFor, className} = p
  return (
    <ChipWrapper htmlFor={htmlFor || ''} className={cx('chip', className)}>
      {renderChip(p)}
    </ChipWrapper>
  )
}

export default Chip
