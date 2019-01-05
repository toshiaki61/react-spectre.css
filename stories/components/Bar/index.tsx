import React, {Fragment} from 'react'

import {action} from '@storybook/addon-actions'
import {boolean, number, object, select, text} from '@storybook/addon-knobs'
import {OptionalKeyMap, optionalSelect} from '../../utils'

import {attr, Bar} from '../../../src/index'

const component = () => {
  return (
    <Fragment>
      <Bar slider items={[{value: 15}, {value: 45}]} />
      <Bar
        {...attr({marginBottom: true})}
        items={[
          {
            role: 'progressbar',
            style: {width: '25%'},
            'aria-valuenow': 25,
            'aria-valuemin': 0,
            'aria-valuemax': 100,
          },
        ]}
      />
      <Bar
        small
        items={[
          {tooltip: '15%', content: '15%', style: {width: '15%'}},
          {
            tooltip: '25%',
            content: '25%',
            style: {width: '25%', backgroundColor: 'gray'},
          },
        ]}
      />
    </Fragment>
  )
}

export default component
