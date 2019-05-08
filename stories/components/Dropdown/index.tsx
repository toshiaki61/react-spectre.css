import * as React from 'react'

import {action} from '@storybook/addon-actions'
import {text} from '@storybook/addon-knobs'

import {Dropdown, Menu, MenuItem} from '../../../src'
import {withLiveEditAndInfo} from '../../utils/withLiveEditAndInfo'

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

export default withLiveEditAndInfo(component, {Dropdown, Menu, MenuItem})
