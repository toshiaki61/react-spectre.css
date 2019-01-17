import React from 'react'

import {action} from '@storybook/addon-actions'
import {boolean, number, object, select, text} from '@storybook/addon-knobs'
import {OptionalKeyMap, optionalSelect} from '../../utils'

import {Icon, IconSizeType, IconType} from '../../../src'

const sizeTypes: OptionalKeyMap<IconSizeType> = {
  '2': 2,
  '3': 3,
  '4': 4,
  'No Value': '',
}

const iconTypes = {
  apps: 'apps',
  'arrow-down': 'arrow-down',
  'arrow-left': 'arrow-left',
  'arrow-right': 'arrow-right',
  'arrow-up': 'arrow-up',
  back: 'back',
  bookmark: 'bookmark',
  caret: 'caret',
  check: 'check',
  copy: 'copy',
  cross: 'cross',
  delete: 'delete',
  download: 'download',
  downward: 'downward',
  edit: 'edit',
  emoji: 'emoji',
  flag: 'flag',
  forward: 'forward',
  link: 'link',
  location: 'location',
  mail: 'mail',
  menu: 'menu',
  message: 'message',
  minus: 'minus',
  'more-horiz': 'more-horiz',
  'more-vert': 'more-vert',
  people: 'people',
  photo: 'photo',
  plus: 'plus',
  refresh: 'refresh',
  'resize-horiz': 'resize-horiz',
  'resize-vert': 'resize-vert',
  search: 'search',
  share: 'share',
  shutdown: 'shutdown',
  stop: 'stop',
  time: 'time',
  upload: 'upload',
  upward: 'upward',
  // 'No Value': '',
}

const component = () => {
  return (
    <Icon
      type={select('type', iconTypes, 'download') as any}
      size={optionalSelect('size', sizeTypes, '')}
    />
  )
}

export default component
