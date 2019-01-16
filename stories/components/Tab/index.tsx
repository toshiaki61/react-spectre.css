import React from 'react'

import {action} from '@storybook/addon-actions'
import {boolean, number, object, select, text} from '@storybook/addon-knobs'
import {OptionalKeyMap, optionalSelect} from '../../utils'

import {Tab, TabProps} from '../../../src'

// export interface TabAttrProps extends TabBaseProps {
//   items: Array<TabItemProps & {id: string}>
//   onClick: MouseEventIdHandler
//   activeId?: string
//   action?: ReactNode
//   block?: boolean
// }
// export interface TabItemProps {
//   title: ReactNode
//   active?: boolean
//   onClick?: MouseEventHandler
//   badge?: string | number
// }
{
  /* <li class="tab-item active">
<a href="#">Music</a>
</li>
<li class="tab-item">
<a href="#" class="active">Playlists</a>
</li>
<li class="tab-item">
<a href="#">Radio</a>
</li>
<li class="tab-item">
<a href="#">Connect</a>
</li> */
}
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

export default component
