import React, {Fragment} from 'react'

import {object, text} from '@storybook/addon-knobs'

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
    <Fragment>
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
        src={text('src', '/man.png')}
        alt={text('alt', 'man')}
        icon={object('icon', {src: '/woman.png', alt: 'woman'})}
        // presence={optionalSelect('Presence', avatarPresences, '')}
      />
    </Fragment>
  )
}

export default component
