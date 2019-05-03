import * as React from 'react'

import {action} from '@storybook/addon-actions'
import {boolean, number, object, select, text} from '@storybook/addon-knobs'
import {OptionalKeyMap, optionalSelect} from '../../utils'

import {Dropdown, Menu, MenuItem} from '../../../src/index'

const component = () => {
  return (
    <Dropdown
      onClick={action('clicked')}
      onBlur={action('blured')}
      initialValue={'a'}
    >
      <Menu>
        <MenuItem link="#" content={text('menu-1', 'menu-1')} />
      </Menu>
    </Dropdown>
  )
}

export default component
