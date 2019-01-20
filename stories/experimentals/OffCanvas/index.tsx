import React, {Fragment} from 'react'

import {action} from '@storybook/addon-actions'
import {boolean, number, object, select, text} from '@storybook/addon-knobs'
import {OptionalKeyMap, optionalSelect} from '../../utils'

import {OffCanvas} from '../../../src'

const component = () => {
  return (
    <OffCanvas
      sidebarId="sidebar-demo"
      sidebarContent={<span>Sidebar</span>}
      content={
        <div>
          <h4>Lorem ipsum</h4>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent
            risus leo, dictum in vehicula sit amet, feugiat tempus tellus. Duis
            quis sodales risus. Etiam euismod ornare consequat.
          </p>
          <p>
            Climb leg rub face on everything give attitude nap all day for under
            the bed. Chase mice attack feet but rub face on everything hopped up
            on goofballs.
          </p>
        </div>
      }
    />
  )
}

export default component
