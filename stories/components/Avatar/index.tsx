import * as React from 'react'

import {action} from '@storybook/addon-actions'
import {boolean, number, object, select, text} from '@storybook/addon-knobs'
import {OptionalKeyMap, optionalSelect} from '../../utils'

import {Avatar, AvatarPresenceType, AvatarSizeType} from '../../../src'

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
    <React.Fragment>
      <Avatar
        size={optionalSelect('Size1', avatarSizes, 'lg')}
        initial={text('initial1', 'Lg')}
        // src={text('src', '')}
        // alt={text('alt', '')}
        // icon={object('icon', {src: ''})}
        presence={optionalSelect('Presence', avatarPresences, '')}
      />
      <Avatar
        size={optionalSelect('Size2', avatarSizes, 'xs')}
        // initial={text('initial2', 'Xs')}
        src={text('src', '/img/man.png')}
        alt={text('alt', 'man')}
        icon={object('icon', {src: '/img/woman.png', alt: 'woman'})}
        // presence={optionalSelect('Presence', avatarPresences, '')}
      />
    </React.Fragment>
  )
}

export default component
