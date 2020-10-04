import * as React from 'react'

import {action} from '@storybook/addon-actions'
import {boolean, text} from '@storybook/addon-knobs'

import {Tab} from '../../../src'
import {withLiveEditAndInfo} from '../../utils/withLiveEditAndInfo'

const component = () => {
  return (
    <Tab
      items={[
        {
          id: 'tab-1',
          title: 'Music',
          badge: 999,
        },
        {id: 'tab-2', title: 'Playlists'},
        {id: 'tab-3', title: 'Radio'},
        {id: 'tab-4', title: 'Connect'},
      ]}
      block={boolean('block', false)}
      action={text('action', '')}
      activeId={text('activeId', 'tab-2')}
      onClick={action('clicked')}
    />
  )
}

export default withLiveEditAndInfo(component, {Tab})
