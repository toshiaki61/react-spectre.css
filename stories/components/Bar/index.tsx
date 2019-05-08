import * as React from 'react'

import {attr, Bar} from '../../../src'
import {withLiveEditAndInfo} from '../../utils/withLiveEditAndInfo'

const component = () => {
  return (
    <React.Fragment>
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
    </React.Fragment>
  )
}

export default withLiveEditAndInfo(component, {Bar})
