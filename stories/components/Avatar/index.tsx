import React from 'react'

import {number, object, text} from '@storybook/addon-knobs'

import {Avatar, AvatarPresenceType, AvatarSizeType} from '@components/Avatar'

import {OptionalKeyMap} from '../../utils/OptionalKeyMap'
import {optionalSelect} from '../../utils/optionalSelect'

const avatarSizes: OptionalKeyMap<AvatarSizeType> = {
  xl: 'xl',
  lg: 'lg',
  sm: 'sm',
  xs: 'xs',
  'No Value': '',
}
const avatarPresences: OptionalKeyMap<AvatarPresenceType> = {
  online: 'online',
  offline: 'offline',
  away: 'away',
  busy: 'busy',
  'No Value': '',
}
const component = () => {
  return (
    <Avatar
      size={optionalSelect('Size', avatarSizes, '')}
      initial={text('initial', '')}
      src={text('src', '')}
      alt={text('alt', '')}
      icon={object('icon', {src: ''})}
      presence={optionalSelect('Presence', avatarPresences, '')}
    />
  )
}

export default component
