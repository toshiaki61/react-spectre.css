import React from 'react'

import {action} from '@storybook/addon-actions'
import {boolean, number, object, select, text} from '@storybook/addon-knobs'
import {OptionalKeyMap, optionalSelect} from '../../utils'

import {Filter} from '../../../src'

const component = () => {
  const style = {
    border: 0,
    boxShadow: '0 0.25rem 1rem rgba(48,55,66,.15)',
    height: '100%',
  }
  return (
    <Filter
      tags={{
        'tag-0': 'All',
        'tag-1': 'Action',
        'tag-2': 'Roleplaying',
        'tag-3': 'Shooter',
        'tag-4': 'Sports',
      }}
      onChange={action('changed')}
      activeId={text('activeId', '')}
      data={[
        {tag: 'tag-2', title: 'Fallout 4', subtitle: 'Roleplaying', style},
        {tag: 'tag-3', title: 'Halo 5', subtitle: 'Shooter', style},
        {tag: 'tag-1', title: 'Quantum Break', subtitle: 'Action', style},
        {tag: 'tag-4', title: 'Forza Horizon 3', subtitle: 'Sports', style},
        {
          tag: 'tag-2',
          title: 'Final Fantasy XV',
          subtitle: 'Roleplaying',
          style,
        },
        {tag: 'tag-4', title: 'NBA 2K17', subtitle: 'Sports', style},
        {tag: 'tag-3', title: 'Battlefield 1', subtitle: 'Shooter', style},
        {tag: 'tag-1', title: 'GTA V', subtitle: 'Action', style},
        {tag: 'tag-4', title: 'FIFA 17', subtitle: 'Sports', style},
        {tag: 'tag-3', title: 'Overwatch', subtitle: 'Shooter', style},
        {tag: 'tag-3', title: 'Titanfall 2', subtitle: 'Shooter', style},
        {tag: 'tag-3', title: 'Gears of Wars 4', subtitle: 'Shooter', style},
      ]}
    />
  )
}

export default component
