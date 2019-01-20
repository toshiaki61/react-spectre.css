import React from 'react'

import {action} from '@storybook/addon-actions'
import {boolean, number, object, select, text} from '@storybook/addon-knobs'
import {OptionalKeyMap, optionalSelect} from '../../utils'

import {Nav} from '../../../src'

const component = () => {
  return (
    <Nav
      activeId={text('activeId', 'nav-2')}
      onClick={action('clicked')}
      items={[
        {
          id: 'nav-1',
          name: 'Elements',
        },
        {
          id: 'nav-2',
          name: 'Layout',
          items: [
            {id: 'nav-2-1', name: 'Flexbox grid'},
            {id: 'nav-2-2', name: 'Responsive'},
            {id: 'nav-2-3', name: 'Navbar'},
            {id: 'nav-2-4', name: 'Empty states'},
          ],
        },
        {id: 'nav-3', name: 'Components'},
        {id: 'nav-4', name: 'Utilities'},
      ]}
    />
  )
}

export default component
